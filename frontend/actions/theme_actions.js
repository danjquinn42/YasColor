import * as APIUtil from '../util/themes_api_util';

export const RECEIVE_THEMES = 'RECEIVE_THEMES';
export const RECEIVE_THEME = 'RECEIVE_THEME';
export const REQUEST_THEME = 'REQUEST_THEME';
export const REQUEST_THEMES = 'REQUEST_THEMES';
// export const REQUEST_THEMES = 'REQUEST_THEMES';
  // body...
// };


export function fetchThemes() {
  return (dispatch) => {
    dispatch(requestThemes());
    return APIUtil.getThemes().then(themes => dispatch(receiveThemes(themes)));
  };
}

export function fetchTheme(id) {
  return (dispatch) => {
    dispatch(requestTheme(id));
    return APIUtil.getTheme(id).then(themes => dispatch(receiveThemes(themes)));
  };
}

export const requestTheme = id => ({
  type: REQUEST_THEME,
  id: id
});

export const requestThemes = () => ({
  type: REQUEST_THEMES
});

export const receiveThemes = themes => ({
  type: RECEIVE_THEMES,
  themes
});

export const receiveTheme = theme => ({
  type: RECEIVE_THEME,
  theme
});
