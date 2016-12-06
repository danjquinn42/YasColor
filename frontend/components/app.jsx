import React from 'react';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>Yas Color!</h1></Link>
    </header>
    { children }
  </div>
);

export default App;
