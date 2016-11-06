import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/push-config-client.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(
    <App/>,
    document.getElementById('render-target'));
});
