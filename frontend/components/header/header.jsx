import React from 'react';
import { Link, withRouter } from 'react-router';


class Header extends React.Component{

  username() {
    if (this.props.currentUser){
      return (
        <section className="user-profile-link group">
          <img className="profile-pic"></img>
          <h2>{this.props.currentUser.name}</h2>
          <ul className="dropdown">
            <li>
              <h3 onClick={this.props.logout}>log out</h3>
            </li>
            <li>
              <h3 to="/">edit profile</h3>
            </li>
          </ul>
        </section>
      );
    } else {
      return (
        <h2 className="login-signup">
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
            <img src={window.logo} className="logo"></img>
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
