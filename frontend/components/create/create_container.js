import { connect } from 'react-redux';
import Create from './create';
import { createTheme, receiveTheme, fetchTheme } from '../../actions/theme_actions';
import { selectTheme } from '../../reducers/selectors';


const mapStateToProps = ( { themes, session, loading }, ownProps ) => {
  // TODO 2: current theme => themescurrentTHeme
  // debugger
  // theme: themes.currentTheme,
  return {
    theme: selectTheme(themes, ownProps.params.themeId),
    loading: loading.themeLoading,
    user: session.currentUser
  };
};

// theme: selectTheme(themes, ownProps.params.themeId),
const mapDispatchToProps = (dispatch) => {
  return  {
    createTheme: theme => dispatch(createTheme(theme)),
    receiveTheme: (id) => dispatch(receiveTheme(id)),
    fetchTheme: (id) => dispatch(fetchTheme(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
