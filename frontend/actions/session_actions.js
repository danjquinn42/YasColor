import * as APIUtil from '../util/session_api_util';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => {
  return (dispatch) => {
    APIUtil.login(user).then(user => dispatch(reveiveCurrentUser(user)));
  };
};

export const logout = () => {
  return (dispatch) => {
    APIUtil.logout().then(user => dispatch(reveiveCurrentUser(null)));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    APIUtil.signup(user).then(user => dispatch(reveiveCurrentUser(user)));
  };
};

export const reveiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});
