import React from 'react';
import { Link } from 'react-router';
import Header from './header/header_container';
import SessionForm from './session_form/session_form_container';


const App = ({ children }) => {
  return (
  <div>
    <Header />
    <SessionForm />
    { children }
  </div>
  );
};


export default App;
