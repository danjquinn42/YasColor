import { RECEIVE_UPDATED_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_UPDATED_USER:
      return merge({}, action.user);
    default:
      return state;
  }
};

export default UsersReducer;
