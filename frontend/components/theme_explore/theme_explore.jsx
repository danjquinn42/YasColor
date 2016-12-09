import React from 'react';
import { Link, withRouter } from 'react-router';
// import ExploreBar from 'explore_bar';
import ExploreItem from './explore_item';


const ExploreBar = () => {
  return (
    <span className="explore-bar-wrapper group">
      <section className="explore-bar group">
        <nav className="options">
          <h3>All Themes</h3>
          <ul className="dropdown">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </nav>
          <div className="search" >
            <img src={window.search} className="search-icon"></img>
            <input type="text"></input>
          </div>
      </section>
    </span>
  );
};

const ExploreItems = ({ themes }) => {
  return (
    <ul className="theme-grid">
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
      <div className="explore-page">
        <ExploreBar />

        <main>
          <ExploreItems themes={ themes} />
        </main>
      </div>
    );
  }

}

export default ThemeExplore;
