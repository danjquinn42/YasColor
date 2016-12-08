import { combineReducers } from 'redux';
import SessionsReducer from './sessionsReducer';
import ThemesReducer from './themesReducer';

const rootReducer = combineReducers({
  session: SessionsReducer,
  themes: ThemesReducer
});

export default rootReducer;
