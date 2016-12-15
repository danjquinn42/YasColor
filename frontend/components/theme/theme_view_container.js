import { connect } from 'react-redux';
import ThemeView from './theme_view';
import { fetchTheme, updateTheme } from '../../actions/theme_actions';
import { showSignIn } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';
import { selectTheme } from '../../reducers/selectors';


const mapStateToProps = ( { themes, loading, session }, ownProps ) => {
  return {
    theme: selectTheme(themes, ownProps.params.themeId),
    loading: loading.themeLoading,
    user: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return  {
    fetchTheme: (id) => dispatch(fetchTheme(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    showSignIn: () => dispatch(showSignIn()),
    updateTheme: (theme) => dispatch(updateTheme(theme))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeView);
