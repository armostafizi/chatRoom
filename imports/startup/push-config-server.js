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
    apiKey: 'AIzaSyDsIPP3YwH7U0MbwNibsMi3jy0z547mEXY',
    //apiKey: 'AIzaSyCLbb8e2_SddP7FKEDyyQpxqXNdZEI5CzQ',
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

console.log('server-conf-end');
