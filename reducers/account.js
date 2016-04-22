import * as ActionTypes from '../actions/types';
import { combineReducers } from 'redux';

import accountLogo from '../assets/images/default.face.icon.png';

const tempAccounts = {
  1: {
    id: 1,
    name: 'lg',
    icon: accountLogo
  },
  2: {
    id: 2,
    name: 'Luo Gang 1 I am a long name',
    icon: accountLogo,
    active: true
  },
  3: {
    id: 3,
    name: 'Luo Gang 2',
    icon: accountLogo
  },
  4: {
    id: 4,
    name: 'Luo Gang 3',
    icon: accountLogo
  },
  5: {
    id: 5,
    name: 'Luo Gang 4',
    icon: accountLogo
  },
  6: {
    id: 6,
    name: 'Luo Gang 5',
    icon: accountLogo
  },
  7: {
    id: 7,
    name: 'Luo Gang 6',
    icon: accountLogo
  },
  8: {
    id: 8,
    name: 'Luo Gang 7',
    icon: accountLogo
  }
};

function ids(state = [1, 2, 3, 4, 5, 6, 7, 8], action) {
  return state;
}

function loading(state = false, action) {
  const { type } = action;

  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
}

function entities(state = tempAccounts, action) {
  const { type, account } = action;

  switch (type) {
    case ActionTypes.ACTIVATE_ACCOUNT: {
      const accounts = {};

      for (const id in state) {
        if (parseInt(id, 10) !== account.id) {
          accounts[id] = { ...state[id], active: false };
        } else {
          accounts[id] = { ...state[id], active: true };
        }
      }

      return accounts;
    }
    default:
      return state;
  }
}

function token(state = null, action) {
  const { type } = action;

  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
      return action.token;
    default:
      return state;
  }
}

export default combineReducers({
  ids,
  loading,
  entities,
  token,
});
