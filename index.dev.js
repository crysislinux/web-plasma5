import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');

let render = () => {
  const Root = require('./containers/Root').default;
  ReactDOM.render(
    <Root store={store} history={history} />,
    rootEl
  );
};

if (module.hot) {
  const renderApp = render;
  const renderError = error => {
    const RedBox = require('redbox-react');
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    );
  };
  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./containers/Root', () => {
    setTimeout(render);
  });
}

render();
