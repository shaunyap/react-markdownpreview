import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main'
import MdApp from 'MdApp';

export default(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={MdApp}/>
    </Route>
  </Router>
);
