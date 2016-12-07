import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Header from './header';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
