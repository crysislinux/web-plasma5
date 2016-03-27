import * as ActionTypes from '../actions/types';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import account from './account';

function app(state = { bootstraped: false }, action) {
  const { type } = action;

  switch (type) {
    case ActionTypes.BOOTSTRAP_APP:
      return Object.assign({}, state, { bootstraped: true });
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  app,
  routing,
  account,
});

export default rootReducer;
