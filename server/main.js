import '../imports/api/messages.js';
import '../imports/api/users.js';
console.log('staring');
import '../imports/startup/accounts-config.js';
console.log('ending');
import '../imports/startup/push-config-server.js';



// // Generate user initials after Facebook login
// Accounts.onCreateUser((options, user) => {
//   console.log('creating!');
//   if (! user.services.facebook) {
//     throw new Error('Expected login with Facebook only.');
//   }
//
//   if (options.profile) {
//           options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
//           user.profile = options.profile;
//   }
//   // Don't forget to return the new user object at the end!
//   return user;
// });
