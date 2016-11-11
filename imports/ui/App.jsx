import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ReactBootstrap, { Button } from 'react-bootstrap';

import LoginModal from './LoginModal.jsx'


import inarray from 'inarray';

import { Messages } from '../api/messages.js';

import Message from './Message.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      value: '',
    };
    this.notify = this.notify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  notify () {
    Push.debug = true;
    console.log('notifying starts');
    let a = Push.send({
        from: 'push',
        title: 'Hello',
        text: 'world',
        badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
        query: {
            // Ex. send to a specific user if using accounts:
            //userId: 'xxxxxxxxx'
        } // Query the appCollection
        // token: appId or token eg. "{ apn: token }"
        // tokens: array of appId's or tokens
        // payload: user data
        // delayUntil: Date
    });
    console.log(a);
    console.log('notifying ended');

  }

  handleSubmit(event) {
    event.preventDefault();

    //find the text field via the React ref
    const text = this.state.value.trim();
    let username = '';

    if (inarray(Object.keys(this.props.currentUser.services), "facebook")) {
      username = this.props.currentUser.services.facebook.name;
    } else if (inarray(Object.keys(this.props.currentUser.services), "twitter")) {
      username = this.props.currentUser.services.twitter.screenName;
    } else if (inarray(Object.keys(this.props.currentUser.services), "google")) {
      username = this.props.currentUser.services.google.name;
    }

    Meteor.call('messages.insert', text, username);

    // Tasks.insert({
    //   text,
    //   createdAt: new Date(), //current time
    //   owner: Meteor.userId(), // _id of logged in user
    //   username: Meteor.user().username, // username of logged in user
    // });

    //Clear form
    this.setState({value: ''});
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted : !this.state.hideCompleted,
    });
  }

  renderMessages() {
    let filteredMessages = this.props.messages;
    //if (this.state.hideCompleted) {
      //filteredMessages = filteredMessages.filter(task => !task.checked);
    //}
    //console.log(filteredMessages);
    return filteredMessages.map((message) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showDeleteButton = message.owner === currentUserId;

      return (
        <Message
          key={message._id}
          message={message}
          showDeleteButton={showDeleteButton}
        />
      );
    });
  }

  handleTextChange (e) {
    this.setState({
      value: e.target.value.substr(0,130)
    });
  }

  render() {
    //console.log(link);
    //console.log(this.props.currentUser);
    //if (this.props.currentUser) {
    //  console.log(this.props.currentUser.profile);
    //  console.log(this.props.currentUser.services);
    //}
    let link = '';
    if (this.props.currentUser){
      if (inarray(Object.keys(this.props.currentUser.services), "facebook")) {
        link = "http://graph.facebook.com/" + this.props.currentUser.services.facebook.id + "/picture/?type=small";
      } else if (inarray(Object.keys(this.props.currentUser.services), "twitter")) {
        link = this.props.currentUser.services.twitter.profile_image_url;
      } else if (inarray(Object.keys(this.props.currentUser.services), "google")) {
        link = this.props.currentUser.services.google.picture;
      }

    }
    //console.log("here is the link!");
    //console.log(link);

    return (
      <div className="container">
        <header>
          <h1>Chat.room</h1>
          <LoginModal currentUser={this.props.currentUser} />
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.notify}
          >
            Notify
          </Button>

          { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit} >
            <img src={link} style={{width: '40px', height: '40px'}} />
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new messages"
                value={this.state.value}
                onChange={this.handleTextChange}
              />
            </form> : ''
          }
        </header>

        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}


App.PropTypes = {
  messages: PropTypes.array.isRequired,
  //incompletedCounts: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};


export default createContainer(() => {
  Meteor.subscribe('messages');
  Meteor.subscribe('userData');
  //console.log(Meteor.user());
  //console.log(Messages.find({}, { sort: { createdAt: -1 } }).fetch());
  return {
    messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
    //incompletedCounts: Messages.find({checked: { $ne: true} }).count(),
    currentUser: Meteor.user(),
  };
}, App);
