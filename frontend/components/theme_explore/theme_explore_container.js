import { connect } from 'react-redux';
import ThemeExplore from './theme_explore';
import { fetchThemes } from '../../actions/theme_actions';
import { selectAllThemes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  themes: selectAllThemes(state)
});

const mapDispatchToProps = dispatch => {
  return { fetchThemes: () => dispatch(fetchThemes()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeExplore);
