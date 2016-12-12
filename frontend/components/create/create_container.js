import { connect } from 'react-redux';
import Create from './create';
import { createTheme, fetchTheme } from '../../actions/theme_actions';
import { selectTheme } from '../../reducers/selectors';


const mapStateToProps = ( { themes, loading }, ownProps ) => {
  return {
    theme: selectTheme(themes, ownProps.params.themeId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return  {
    createTheme: theme => dispatch(createTheme(theme)),
    fetchTheme: (id) => dispatch(fetchTheme(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
