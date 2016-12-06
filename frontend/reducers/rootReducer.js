import { combineReducers } from 'redux';
import SessionsReducer from './sessionsReducer';

const rootReducer = combineReducers({
  session: SessionsReducer
});

export default rootReducer;
