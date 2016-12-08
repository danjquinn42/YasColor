import { connect } from 'react-redux';
import { fetchTheme } from '../../actions/theme_actions';
import { selectTheme } from '../../reducers/selectors';
import ThemeShow from './theme_show';

const mapStateToProps = (state, { params }) => {
  const themeId = parseInt(params.themeId);
  // const theme = selectTheme(state, themeId);
  const theme = fetchTheme(themeId);
  return {
    themeId,
    theme
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTheme: id => dispatch(fetchTheme(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeShow);
