import React from 'react';
import { Link, withRouter } from 'react-router';
// import ExploreBar from 'explore_bar';
import ExploreItem from './explore_item';


const ExploreBar = () => {
  return (
    <section>
      <nav className="options">
        <h3>All Themes</h3>
        <ul className="dropdown">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </nav>
      <input className="search" type="text" placeholder="Search"></input>
    </section>
  );
};

const ExploreItems = ({ themes }) => {
  return (
    <ul>
      { themes.map(theme => <ExploreItem key={theme.id} theme={theme} />) }
    </ul>
  );
};


class ThemeExplore extends React.Component {

  componentDidMount() {
    this.props.fetchThemes();
  }

  render() {
    const themes = this.props.themes;

    return (
      <div>
        <ExploreBar />

        <main className="theme-grid">
          <ExploreItems themes={ themes} />
        </main>
      </div>
    );
  }

}

export default ThemeExplore;
