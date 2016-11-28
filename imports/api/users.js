if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("userData", function () {
    if (this.userId) {
      console.log('logged in!');
      return Meteor.users.find({
        _id: this.userId
      }, {
        fields: {'services': 1}
      });
    } else {
      console.log('not logged in!');
      this.ready();
    }
  });
};
