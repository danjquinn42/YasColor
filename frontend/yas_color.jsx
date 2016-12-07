import React from 'react';
import ReactDom from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    // debugger
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // debugger

  const root = document.getElementById('root');
  ReactDom.render(<Root store={store}/>, root);
});
