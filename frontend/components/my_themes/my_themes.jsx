import React from 'react';
import { Link, withRouter } from 'react-router';
import ExploreItem from '../theme_explore/explore_item';

const MyItems = ( {themes} ) => {
  return (
    <ul className="theme-grid">
      { themes.map(theme => <ExploreItem key={theme.id} theme={theme} />) }
    </ul>
  );
};

class MyThemes extends React.Component {



  render() {
    const themes = this.props.user.saved_themes;

    return (
      <div className="explore-page">

        <main>
          <MyItems themes={ themes } />
        </main>
      </div>
    );
  }
}
// <ExploreBar />

export default MyThemes;
