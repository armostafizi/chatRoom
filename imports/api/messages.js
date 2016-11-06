import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('messages', function messagePublication() {
    return Messages.find({
      $or: [
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'messages.insert'(text){
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).services.facebook.name,
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
