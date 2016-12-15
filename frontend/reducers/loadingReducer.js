import {
  RECEIVE_THEMES,
  RECEIVE_THEME,
  REQUEST_THEMES,
  REQUEST_THEME,
  RECEIVE_UPDATED_THEME} from '../actions/theme_actions';

const initialState = {
  exploreLoading: false,
  themeLoading: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_THEMES:
    case RECEIVE_THEME:
    case RECEIVE_UPDATED_THEME:
      return initialState;
    case REQUEST_THEMES:
    return Object.assign({}, state, { exploreLoading: true });
    case REQUEST_THEME:
      return Object.assign({}, state, { themeLoading: true });
    default:
      return state;
  }
};
