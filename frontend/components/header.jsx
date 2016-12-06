import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component{



  render() {
    return (
      <header className="header group">
        <nav className="header-nav">
          <Link to="/" className="header-logo">
            <img className="logo"></img>
            <h1>Yas Color!</h1>
          </Link>

          <ul className="nav-links">

            <Link to="/">
              <li>Create</li>
            </Link>

            <Link to="/">
              <li>Explore</li>
            </Link>

            <Link to="/">
              <li>Mine</li>
            </Link>
          </ul>

          <Link to="/" className="user-profile-link group">
            <img className="profile-pic"></img>
            <h2>UserName</h2>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
