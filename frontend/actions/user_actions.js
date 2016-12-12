import * as APIUtil from '../util/users_api_util';

export const RECEIVE_UPDATED_USER = 'RECEIVE_UPDATED_USER';

export function updateUser(user) {
  return (dispatch) => {
    return APIUtil.patchUser(user).then(updatedUser => {
      dispatch(receiveUpdatedUser(updatedUser));
      return updatedUser;
    });
  };
}

export const receiveUpdatedUser = user => ({
  type: RECEIVE_UPDATED_USER,
  user
});
