import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.jsx';

import '../imports/startup/push-config-client.js';

Meteor.startup(() => {
  render(
    <App/>,
    document.getElementById('render-target'));
});
