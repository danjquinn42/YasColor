import React from 'react';
import { Link } from 'react-router';
import Header from './header/header_container';


const App = ({ children }) => {
  return (
  <div>
    { children }
    <Header />
  </div>
  );
};


export default App;
