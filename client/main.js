import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Router, Route, browserHistory } from 'react-router';

import GetHelp from '../imports/ui/GetHelp';
import Assistance from '../imports/ui/Assistance';
import NotFound from '../imports/ui/NotFound';
import App from '../imports/ui/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/gethelp" component={GetHelp} />
    <Route path="/assistance" component={Assistance} />
    <Route path="*" component={NotFound} />
  </Router>
);

browserHistory.push({
  pathname: '/gethelp',
  search: '?the=query',
  state: { some: 'state' }
})

Meteor.startup(() => {
  Tracker.autorun(() => {

    ReactDOM.render(routes, document.getElementById('app'));
  });
});
