import * as ActionTypes from './types';
import makeActionCreator from '../utils/makeActionCreator';

export const activateAccount = makeActionCreator(ActionTypes.ACTIVATE_ACCOUNT, 'account');
