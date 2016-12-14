import { connect } from 'react-redux';
import {
  login,
  logout,
  signup,
  showSignIn } from '../../actions/session_actions';
import Header from './header';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    logout: () => dispatch(logout()),
    showSignIn: () => dispatch(showSignIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
