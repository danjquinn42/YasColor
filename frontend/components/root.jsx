import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import ThemeExploreContainer  from './theme_explore/theme_explore_container';
import ThemeViewContainer from './theme/theme_view_container';
import CreateContainer from './create/create_container';
import MyThemesContainer from './my_themes/my_themes_container';
// import ExploreContainer from './explore/explore_container';
// import ThemeContainer from './theme/theme_container';

import App from './app';

const Root = ({ store }) => {
  // const _ensureLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (!currentUser) {
  //     replace('/login');
  //   }
  // };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/create'); /// TODO redirect to create
    }
  };

  // const _redirectToCreate = (nextState, replace) => {
  //   if (this.path === '/'){
  //   replace('/create');}
  // };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={CreateContainer} />
          <Route path="/explore" component={ThemeExploreContainer} />
          <Route path="/create" component={CreateContainer} />
          <Route path="/mythemes" component={MyThemesContainer} />
          <Route path="/create/:themeId" component={CreateContainer} />
          <Route path="/theme/:themeId" component={ThemeViewContainer} />
        </Route>
      </Router>
    </Provider>
  );
};
// <Route path="/login" component={SessionFormContainer}
//   onEnter={_redirectIfLoggedIn} />
// <Route path="/signup" component={SessionFormContainer}
//   onEnter={_redirectIfLoggedIn} />

export default Root;
