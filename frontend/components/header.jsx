import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component{

  username() {
    if (window.currentUser){
      return (
        <section className="user-profile-link group">
          <img className="profile-pic"></img>
          <h2>{window.currentUser.name}</h2>
          <ul className="dropdown">
            <li>
              <Link to="/">logout</Link>
            </li>
            <li>
              <Link to="/">edit profile</Link>
            </li>
          </ul>
        </section>
      );
    } else {
      return (
        <h2 className="user-profile-link">
          <Link to="/login">log in</Link>
          &nbsp;or&nbsp;
          <Link to="/signup">sign up</Link>
        </h2>
      );
    }
  }

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
            {this.username()}

        </nav>
      </header>
    );
  }
}

export default Header;
