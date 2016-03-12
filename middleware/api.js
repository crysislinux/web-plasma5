import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';
import { API_ROOT } from '../config/env';

const NO_SCHEMA = 'NO_SCHEMA';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(token, endpoint, schema, method = 'GET', data = {}) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  const fetchOptions = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  if (method !== 'GET') {
    fetchOptions.body = JSON.stringify(data);
  }

  if (token) {
    fetchOptions.headers.Authorization = `JWT ${token}`;
  }

  return fetch(fullUrl, fetchOptions)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);

      return Object.assign({},
        schema !== NO_SCHEMA ? normalize(camelizedJson, schema) : camelizedJson
      );
    });
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

const userSchema = new Schema('users', {
  idAttribute: 'id'
});

// Schemas for Github API responses.
export const Schemas = {
  NO_SCHEMA,
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, method, data } = callAPI;

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
