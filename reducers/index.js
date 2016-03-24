import * as ActionTypes from '../actions/types';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import merge from 'lodash/merge';

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

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
  entities,
  routing,
});

export default rootReducer;
