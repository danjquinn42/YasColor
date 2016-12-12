import { connect } from 'react-redux';
import ThemeView from './theme_view';
import { fetchTheme } from '../../actions/theme_actions';
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
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeView);
