import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/rootReducer';

function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
}

export default configureStore;
