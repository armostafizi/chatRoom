//import { Push } from 'meteor/raix:push';

Push.Configure({
  android: {
    senderID: 612526468068,
    // 612526468068
    alert: true,
    badge: true,
    sound: true,
    vibrate: true,
    clearNotifications: true
    // icon: '',
    // iconColor: ''
  },
  /*ios: {
    alert: true,
    badge: true,
    sound: true
  }*/
});
