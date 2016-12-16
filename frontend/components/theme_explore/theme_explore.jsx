import React from 'react';
import { Link, withRouter } from 'react-router';
// import ExploreBar from 'explore_bar';
import ExploreItem from './explore_item';


const ExploreBar = ({searchTerms, setSearchTerms}) => {

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
            <input type="text"
              onChange={setSearchTerms()}
              value={searchTerms}
              ></input>
          </div>
      </section>
    </span>
  );
};

const ExploreItems = ({ searchTerms, themes }) => {
  return (
    <ul className="theme-grid">
      { themes.map((theme) => {
        const title = theme.title.toLowerCase();
        const term = searchTerms.toLowerCase();
        if (title.includes(term)) {
          return (<ExploreItem key={theme.id} theme={theme} />);
          }
        })
      }
    </ul>
  );
};


class ThemeExplore extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerms: "" };
    this.setSearchTerms = this.setSearchTerms.bind(this);
  }

  componentDidMount() {
    this.props.fetchThemes();
  }

  setSearchTerms() {
    return (event) => {
      this.setState({ searchTerms: event.target.value });
    };
  }


  render() {
    if ( this.props.exploreLoading ) {
    return (
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
      );
    }

    const themes = this.props.themes;
    return (
      <div className="explore-page">
        <ExploreBar
          searchTerms={this.state.searchTerms}
          setSearchTerms={this.setSearchTerms.bind(this)} />
        <main>
          <ExploreItems
            searchTerms={this.state.searchTerms}
            themes={ themes } />
        </main>
      </div>
    );
  }

}

export default ThemeExplore;
