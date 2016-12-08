import { RECEIVE_THEMES, RECEIVE_THEME } from '../actions/theme_actions';
import merge from 'lodash/merge';

const ThemesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_THEMES:
      return action.themes;
    case RECEIVE_THEME:
      const newTheme = {[action.theme.id]: action.theme };
      return merge({}, state, newTheme);
    default:
      return state;
  }
};

export default ThemesReducer;
