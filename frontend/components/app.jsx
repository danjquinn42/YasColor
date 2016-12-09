import React from 'react';
import { Link } from 'react-router';
import Header from './header/header_container';

// TODO make auth form a seperate container below header
// which is only inserted if current user is null
// change redirects in Auth to show/hide

const App = ({ children }) => {
  return (
  <div>
    <Header />
    { children }
  </div>
  );
};


export default App;
