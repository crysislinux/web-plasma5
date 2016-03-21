import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import SddmPage from './containers/SddmPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SddmPage} />
  </Route>
);
