import React, { Component } from 'react';
import ReactBootstrap, { Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';



export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.logout = this.logout.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    console.log('here');
    this.setState({ showModal: true });
  }

  logout() {
    Meteor.logout();
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    let out="loggedOut";
    if (this.props.currentUser) {
      out="LoggedIn"
    }

    return (
      <div>
        { !this.props.currentUser ?
          <div>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.open}
            >
              Login
            </Button>
            <Modal autoFocus="True" bsSize="sm" show={this.state.showModal} onHide={this.close}>
              <Modal.Body>
                <div>
                  <AccountsUIWrapper />
                </div>
              </Modal.Body>
            </Modal>
          </div>
          :
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.logout}
          >
            Logout
          </Button>
        }
      </div>
    );
  }
}
