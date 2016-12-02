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

console.log('client-conf-end');
