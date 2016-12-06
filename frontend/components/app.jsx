import React from 'react';
import { Link } from 'react-router';
import Header from './header';


const App = ({ children }) => {
  return (
  <div>
    <Header />
    { children }
  </div>
  );
};


export default App;
