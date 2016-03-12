import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import { Schemas, CALL_API } from './api';
// import * as fakedata from './fakedata';

const fakedEndpoint = {

};

function callApi(token, endpoint, schema, method = 'GET', data = {}) {
  const p = new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return p.then(() => {
    const returned = fakedEndpoint[endpoint][method](data);
    const camelizedJson = camelizeKeys(returned);
    return Object.assign({}, schema !== Schemas.NO_SCHEMA ?
      normalize(camelizedJson, schema) : camelizedJson);
  });
}

// fake data for certen apis that are not implemented yet
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;

  const { schema, types, method, data } = callAPI;

  if (!fakedEndpoint[endpoint] || !fakedEndpoint[endpoint][method || 'GET']) {
    return next(action);
  }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(actionData) {
    const finalAction = Object.assign({}, action, actionData);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({ data: data || {}, type: requestType }));

  const token = store.getState().user.current.token;

  return callApi(token, endpoint, schema, method, data).then(
    response => next(actionWith({
      response,
      data: data || {},
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      data: data || {},
      error: error.message || 'Something bad happened'
    }))
  );
};
