import * as APIUtil from '../util/sessions_api_util';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function logout() {
  return (dispatch) => {
    return APIUtil.logout().then(user => {
      return dispatch(receiveCurrentUser(null));
    }
    );
  };
}

export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
