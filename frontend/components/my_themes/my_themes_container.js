import { connect } from 'react-redux';
import MyThemes from './my_themes';
import { selectAllThemes } from '../../reducers/selectors';

import { fetchTheme } from '../../actions/theme_actions';
// import { fetchThemes } from '../../actions/theme_actions';
// import { selectAllThemes } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    themes: selectAllThemes(state),
    user: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
  return { fetchTheme: (id) => dispatch(fetchTheme(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyThemes);
