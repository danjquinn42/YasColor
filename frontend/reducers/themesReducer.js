import { RECEIVE_THEMES,
  RECEIVE_THEME,
  RECEIVE_NEW_THEME,
  RECEIVE_UPDATED_THEME} from '../actions/theme_actions';
import merge from 'lodash/merge';

const _defaultTheme = {
  id: 0,
  default: true,
  title: '',
  user: {},
  color_swatches: [
    { id: 0, hue: 348, saturation: 62, lightness: 41 },
    { id: 1, hue: 191, saturation: 96, lightness: 39 },
    { id: 2, hue: 213, saturation: 14, lightness: 85 },
    { id: 3, hue: 39, saturation: 85, lightness: 62 },
    { id: 4, hue: 270, saturation: 6, lightness: 12 }]
};

const _defaultState = {
  themes: {},
  theme: _defaultTheme
};
// const _defaultState // TODO : themes {} current_heme

const ThemesReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_UPDATED_THEME:
      return merge({}, action.theme);
    case RECEIVE_THEMES:
      return merge({}, state, {themes: action.themes});
    case RECEIVE_THEME:
      const newTheme = {[action.theme.id]: action.theme };
      return merge({}, state, newTheme);
    default:
      return state;
  }
};

export default ThemesReducer;
