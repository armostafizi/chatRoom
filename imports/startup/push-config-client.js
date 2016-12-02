import { Push } from 'meteor/raix:push';

console.log('client-conf-start');

Push.Configure({
  android: {
    senderID: 612526468068,
    alert: true,
    badge: true,
    sound: true,
    vibrate: true,
    clearNotifications: true
    // icon: '',
    // iconColor: ''
  },
  ios: {
    alert: true,
    badge: true,
    sound: true
  }
});

Push.debug = true;

Push.addListener('token', function(token) {
    alert(JSON.stringify(token));
    Meteor.call('raix:push-update', token, function(err, result){
        if (err) {
            console.log("ERROR: I am inside raix:push-update call")
        } else {
            console.log("Succesfully added: " + result)
        }
    });
});

console.log('client-conf-end');
