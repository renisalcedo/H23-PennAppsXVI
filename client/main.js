import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Router, Route, browserHistory } from 'react-router';

// REACT COMPONENTS
import GetHelp from '../imports/ui/GetHelp';
import Assistance from '../imports/ui/Assistance';
import NotFound from '../imports/ui/NotFound';
import App from '../imports/ui/App';

// API DATA
import {assistance} from '../imports/api/assistance';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/gethelp" component={GetHelp} />
    <Route path="/assistance" component={Assistance} />
    <Route path="*" component={NotFound} />
  </Router>
);

assistance();

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(routes, document.getElementById('app'));
  });
});
