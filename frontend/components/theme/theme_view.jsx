import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from './comments';
import ActionsPanel from './actions_panel';


class ThemeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { themeDisplay: "small"};
  }

  componentDidMount() {
    this.props.fetchTheme(this.props.params.themeId);
    // this.swatches = this.seatches.bind(this);
    // debugger
  }

  toggleFullscreen() {
    const css = (this.state.themeDisplay === "small") ? "fullscreen" : "small";
    this.setState({themeDisplay: css});
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



  render(){
    const { theme, loading, children, updateUser } = this.props;
    if (loading || !theme.color_swatches) {
      return <h1>loading</h1>;
    } else {
      const title = (theme.title) ? theme.title : `Untitled No. ${theme.id}`;

      return (
        <content className="view-page group">
          <div className = "edit-title group">
            <input className="title" type="text" defaultValue={title }></input>
            <img className="pencil" src={window.pencil}></img>
          </div>
          <ol className={`view-theme ${this.state.themeDisplay}`}
            onClick={this.toggleFullscreen.bind(this)}>
            {this.swatches(theme)}
          </ol>
          <div className="metadata group">
            <Comments />
            {ActionsPanel(theme, updateUser)}
          </div>
        </content>
      );
    }
  }
}

export default ThemeView;
