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

          <ul className="nav-links group">

            <li>
              <Link to="/">Create</Link>
            </li>

            <li>
              <Link to="/">Explore</Link>
            </li>

            <li>
              <Link to="/">My Themes</Link>
            </li>

          </ul>

          <Link to="/" className="user-profile-link group">
            <img className="profile-pic"></img>
            <h2>UserName / login</h2>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
