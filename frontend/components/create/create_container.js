import { connect } from 'react-redux';
import Create from './create';
import { createTheme } from '../../actions/theme_actions';
import { selectTheme } from '../../reducers/selectors';


const mapStateToProps = ( { themes, loading }, ownProps ) => {
  return {
    theme: selectTheme(themes, ownProps.params.themeId)
  };
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return  { createTheme: theme => dispatch(createTheme(theme)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
