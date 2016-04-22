import * as ActionTypes from './types';
import makeActionCreator from '../utils/makeActionCreator';

export const activateAccount = makeActionCreator(ActionTypes.ACTIVATE_ACCOUNT, 'account');
export const loginRequest = makeActionCreator(ActionTypes.LOGIN_REQUEST, 'username', 'password');
export const loginSuccess = makeActionCreator(ActionTypes.LOGIN_SUCCESS, 'token');

export function login(username, password) {
  return (dispatch) => {
    setTimeout(() => {
      // emulate login, we have not implement a real login system now
      dispatch(loginSuccess('xxx.xxx.xxx'));
    }, 300);

    dispatch(loginRequest(username, password));
  };
}
