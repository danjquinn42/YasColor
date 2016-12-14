import * as APIUtil from '../util/sessions_api_util';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SHOW_SIGN_IN = 'SHOW_SIGN_IN';
export const HIDE_SIGN_IN = 'HIDE_SIGN_IN';


export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user).
    then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    });
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

export function clearSessionErrors() {
  return (dispatch) => {
    return dispatch(clearErrors());
  };
}

export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user).
    then(currentUser => dispatch(receiveCurrentUser(currentUser)),
            err => {
              return dispatch(receiveErrors(err.responseJSON));
            });
  };
}

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const showSignIn = () => ({
  type: SHOW_SIGN_IN
});

export const hideSignIn = () => ({
  type: HIDE_SIGN_IN
});
