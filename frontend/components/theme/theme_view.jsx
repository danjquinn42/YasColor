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
      title: nextProps.theme.title
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

  title(){
    if ( this.props.user && this.props.user.id === this.props.theme.user.id ){
      return (
        <form className="title-form"
          onSubmit={this.handleSubmit}>
          { this.editSaveIcon() }
          <input
            className="title"
            type="text"
            defaultValue={ this.state.title }
            onChange={this.updateTitle()}>
          </input>
          <input type="submit" className="save-button non-display" value="submit"></input>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="pencil"></div>
          <h3 className="title">{ this.state.title }</h3>
        </form>
      );
    }
    // <input type="submit" className="save-button non-display" value="submit"></input>
  }

  // displayAfterSave(){
  //   return (this.state.justSaved ? "show-check" : "non-display");
  // }

  editSaveIcon() {
    if (this.state.justSaved) {
      return (
        <img className="pencil check"
           src={window.check}>
        </img>
      );
    } else {
      return (
        <img className="pencil"
           src={window.pencil}>
        </img>
      );
    }
  }

  dontDisplayAfterSave(){
    return (this.state.justSaved ? "non-display" : "show-check");
  }

  updateTitle(feild){
    return event => this.setState({ title: event.target.value, justSaved: false });
  }

  render(){
    const { theme, loading, children, user, updateUser } = this.props;
    if (loading || theme.default) {
      return <h1>loading</h1>;
    }

    return (
      <content className="view-page group">
        <div className = "edit-title group">
          { this.title() }
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
