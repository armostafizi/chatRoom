import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor'
import classnames from 'classnames'
// Task component - represents a single todo item
export default class Message extends Component {
	constructor(props) {
		super(props);
		this.DeleteThisMessage = this.DeleteThisMessage.bind(this);
	}

	DeleteThisMessage() {
    Meteor.call('messages.remove', this.props.message._id)
		// Tasks.remove(this.props.task._id);
	}

  render() {
  	// Give tasks a different className when they are checked off,
  	// so that we can style them nicely in CSS

    return (
      <li>
      	<button className="delete" onClick={this.DeleteThisMessage}>
      		&times;
      	</button>

      	<span className="text">
          <strong>{this.props.message.username}</strong>: {this.props.message.text}
        </span>
      </li>
    );
  };
}

Message.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  message: PropTypes.object.isRequired,
};
