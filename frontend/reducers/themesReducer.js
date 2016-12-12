import { RECEIVE_THEMES,
  RECEIVE_THEME,
  RECEIVE_NEW_THEME} from '../actions/theme_actions';
import merge from 'lodash/merge';

const _defaultTheme = {
  title: '',
  user: {},
  colors: [[348,62,41], [191,96,39], [213,14,85], [39,85,62], [270,6,12]],
};

const ThemesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_THEMES:
      return merge({}, action.themes);
    case RECEIVE_THEME:
      const newTheme = {[action.theme.id]: action.theme };
      return merge({}, state, newTheme);
    default:
      return state;
  }
};

export default ThemesReducer;
