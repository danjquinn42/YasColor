import React from 'react';
import { Link, withRouter } from 'react-router';


class Header extends React.Component{

  username() {
    if (this.props.currentUser){
      return (
        <section className="user-profile-link group">
          <img src={window.user} className="profile-pic"></img>
          <h2>{this.props.currentUser.name}</h2>
          <ul className="dropdown">
            <li>
              <Link to="/" onClick={this.props.logout}>log out</Link>
            </li>
          </ul>
        </section>
      );
    } else {
      return (
        <h2 className="login-signup"
          onClick={this.props.showSignIn}>
          log in
        </h2>
      );
    }
  }


  myThemes() {
    if (this.props.currentUser) {
      return (<Link to="/mythemes">
          <h4>My Themes</h4>
        </Link>);
    } else {
      return ( '' );
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
              <Link to="/create">Create</Link>
            </li>

            <li>
              <Link to="/explore">Explore</Link>
            </li>

            <li>
              {this.myThemes()}
            </li>

          </ul>
            {this.username()}

        </nav>
      </header>
    );
  }
}

export default Header;
