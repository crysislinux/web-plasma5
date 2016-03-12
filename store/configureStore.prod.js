import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import apifake from '../middleware/apifake';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, apifake, api, createLogger())
    )
  );

  return store;
}
