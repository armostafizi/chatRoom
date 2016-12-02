import { Push } from 'meteor/raix:push';

console.log('server-conf-start');
Push.Configure({
  apn: {
    //certData: Assets.getText('apnDevCert.pem'),
    //keyData: Assets.getText('apnDevKey.pem'),
    passphrase: 'xxxxxxxxx',
    production: true,
    //gateway: 'gateway.push.apple.com',
  },
  gcm: {
    apiKey: 'AIzaSyCLbb8e2_SddP7FKEDyyQpxqXNdZEI5CzQ',
    projectNumber: 612526468068
  }
  // production: true,
  // 'sound' true,
  // 'badge' true,
  // 'alert' true,
  // 'vibrate' true,
  // 'sendInterval': 15000, Configurable interval between sending
  // 'sendBatchSize': 1, Configurable number of notifications to send per batch
  // 'keepNotifications': false,
//
});
Push.debug = true;
console.log('server-conf-end');
