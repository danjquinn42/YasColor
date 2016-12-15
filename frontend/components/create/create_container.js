import { connect } from 'react-redux';
import Create from './create';
import { createTheme, receiveTheme, fetchTheme } from '../../actions/theme_actions';
import { showSignIn } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';
import { selectTheme } from '../../reducers/selectors';


const mapStateToProps = ( { themes, session, loading }, ownProps ) => {
  // TODO 2: current theme => themescurrentTHeme
  // debugger
  // theme: themes.currentTheme,
  return {
    theme: selectTheme(themes, ownProps.params.themeId),
    loading: loading.themeLoading,
    user: session.currentUser,
    authFormVisible: session.authFormVisible
  };
};

// theme: selectTheme(themes, ownProps.params.themeId),
const mapDispatchToProps = (dispatch) => {
  return  {
    createTheme: theme => dispatch(createTheme(theme)),
    receiveTheme: (id) => dispatch(receiveTheme(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchTheme: (id) => dispatch(fetchTheme(id)),
    showSignIn: () => dispatch(showSignIn())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
