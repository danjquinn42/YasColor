import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from './comments';
import ActionsPanel from './actions_panel';
import merge from 'lodash/merge';


class ThemeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { themeDisplay: "small",
      title: props.theme.title,
      justSaved: false };
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTheme(this.props.params.themeId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      theme: nextProps.theme,
      title: nextProps.theme.title,
      justSaved: nextProps.justSaved
    });
  }


  toggleFullscreen() {
    const css = (this.state.themeDisplay === "small") ? "fullscreen" : "small";
    this.setState({themeDisplay: css});
  }

  handleSubmit(event) {
    event.preventDefault;
    // debugger;
    const newTheme = merge( {}, this.props.theme, { title: this.state.title });
    if ( this.props.theme.user.id === this.props.user.id ) {
      this.props.updateTheme(newTheme);
      this.setState({ justSaved: true });
    }
  }


  swatches(theme){
    return theme.color_swatches.map((color) => {
      const style = { background: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`};

      return (
        <li className={`view-swatch`}
          key={color.ord}
          style={ style }
          ></li>
      );
    });
  }

  updateTitle(feild){
    // debugger;
    return event =>  this.setState({ title: event.target.value });
  }

  render(){
    const { theme, loading, children, user, updateUser } = this.props;
    if (loading || theme.default) {
      return <h1>loading</h1>;
    }

    return (
      <content className="view-page group">
        <div className = "edit-title group">
          <form onSubmit={this.handleSubmit}>
            <img className="pencil" src={window.pencil}></img>
            <input
              className="title"
              type="text"
              defaultValue={ this.state.title }
              onChange={this.updateTitle()}>
            </input>
            <input type="submit" className="save-button non-display" value="submit"></input>
          </form>
        </div>
        <ol className={`view-theme ${this.state.themeDisplay}`}
          onClick={this.toggleFullscreen.bind(this)}>
          {this.swatches(theme)}
        </ol>
        <div className="metadata group">
          <Comments />
          {ActionsPanel(theme, user, updateUser, this.props.showSignIn)}
        </div>
      </content>
    );
  }
}


export default ThemeView;
