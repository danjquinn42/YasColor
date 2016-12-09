import { combineReducers } from 'redux';
import SessionsReducer from './sessionsReducer';
import ThemesReducer from './themesReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  session: SessionsReducer,
  themes: ThemesReducer,
  loading: LoadingReducer
});

export default rootReducer;
