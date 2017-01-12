import { connect } from 'react-redux';
import {
    login,
    logout,
    signup,
    clearSessionErrors,
    hideSignIn,
    showSignIn
  } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    authFormVisible: session.authFormVisible,
    errors: session.errors,
    formType: session.formType
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = 'login';

  return {
    clearErrors: () => dispatch(clearSessionErrors()),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    hideSignIn: () => dispatch(hideSignIn()),
    showSignIn: () => dispatch(showSignIn()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
