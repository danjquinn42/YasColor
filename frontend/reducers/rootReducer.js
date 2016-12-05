import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';

const rootReducer = combineReducers({
  session: SessionsReducer
});

export default rootReducer;
