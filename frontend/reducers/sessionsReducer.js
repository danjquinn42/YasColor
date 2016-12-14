import { RECEIVE_CURRENT_USER,
        LOGOUT,
        CLEAR_ERRORS,
        RECEIVE_ERRORS,
        SHOW_SIGN_IN,
        HIDE_SIGN_IN
        } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _nullUser = Object.freeze ({
  currentUser: null,
  errors: []
});

const _nullErrors = Object.freeze ({
  errors: []
});

const SessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case CLEAR_ERRORS:
      return merge({}, _nullErrors, {currentUser});
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    case SHOW_SIGN_IN:
      return merge({}, state, { authFormVisible: true, formType: 'login' });
    case HIDE_SIGN_IN:
      return merge({}, state, { authFormVisible: false });
    default:
      return state;
  }
};

export default SessionsReducer;
