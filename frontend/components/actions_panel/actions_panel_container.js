import { connect } from 'react-redux';
import { updateTheme } from '../../actions/theme_actions';

import ActionsPanel from './actions_panel';

const mapStateToProps = ( { session } ) => {
  return {
    user: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTheme: (theme) => dispatch(updateTheme(theme))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsPanel);
