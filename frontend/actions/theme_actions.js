import * as APIUtil from '../util/themes_api_util';

export const RECEIVE_THEMES = 'RECEIVE_THEMES';
export const RECEIVE_THEME = 'RECEIVE_THEME';
export const RECEIVE_NEW_THEME = 'RECEIVE_NEW_THEME';
export const REQUEST_THEME = 'REQUEST_THEME';
export const REQUEST_THEMES = 'REQUEST_THEMES';
export const RECEIVE_UPDATED_THEME = "RECEIVE_UPDATED_THEME";

export function fetchThemes() {
  return (dispatch) => {
    return APIUtil.getThemes().then(themes => dispatch(receiveThemes(themes)));
  };
}

export function fetchTheme(id) {
  return (dispatch) => {
    dispatch(requestTheme(id));
    return APIUtil.getTheme(id).then(theme => dispatch(receiveTheme(theme)));
  };
}

export function createTheme(theme) {
  return (dispatch) => {
    return APIUtil.postTheme(theme).then(newTheme => {
      dispatch(receiveNewTheme(newTheme));
      return newTheme;
    });
  };
}

export function updateTheme(theme) {
  return (dispatch) => {
    return APIUtil.patchTheme(theme).them(updatedTheme => {
      dispatch(receiveUpdatedTheme(updatedTheme));
      return updatedTheme;
    });
  };
}

export const receiveUpdatedTheme = theme => ({
  type: RECEIVE_UPDATED_THEME,
  theme
});

export const receiveNewTheme = theme => ({
	type: RECEIVE_NEW_THEME,
	theme
});

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
