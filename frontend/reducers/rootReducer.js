import { combineReducers } from 'redux';
import SessionsReducer from './sessionsReducer';
import ThemesReducer from './themesReducer';
// import CurrentThemeReducer from './currentThemeReducer';
import LoadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  session: SessionsReducer,
  themes: ThemesReducer,
  loading: LoadingReducer
});

export default rootReducer;
