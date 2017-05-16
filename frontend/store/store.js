import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';

function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
}

export default configureStore;
