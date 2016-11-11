import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('messages', function messagePublication() {
    if (this.userId) {
      return Messages.find();
    }
    return;
    //return Messages.find(
      //{
      //$or: [
      //  { owner: this.userId },
      //],
      //}
    //);
  });
}

Meteor.methods({
  'messages.insert'(text, username){
    check(text, String);
    check(username, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      text,
      username,
      createdAt: new Date(),
      owner: this.userId,
      //username: Meteor.users.findOne(this.userId).services.facebook.name,
    });
  },

  'messages.remove'(messageId){
    check(messageId, String);

    const message = Messages.findOne(messageId);
    if (message.owner !== this.userId) {
      //if the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Messages.remove(messageId);
  },
});
