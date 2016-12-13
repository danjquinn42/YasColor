import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import InputRange from 'react-input-range';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme
    }; // TODO : State should should be set from initial params
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sliderList = this.sliderList.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    if (this.props.params.themeId) {
    this.props.fetchTheme(this.props.params.themeId);
    } //TODO : replace fetchTheme with ReceiveTheme if this.props.params.themeId
  }

  // TODO :
  componentWillReceiveProps(nextProps) {
    // debugger
    this.setState({ theme: nextProps.theme});
  }
  //componentWillUnmount ==> dispatch resetCurrentTheme

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTheme(this.state).
      then((data) => this.props.router.push(`/theme/${data.id}`));
  }


  update(property) {
    debugger;
    return event => this.setState({ [property]: event.target.value });
  }

  hueToX(hue, saturation) {
    saturation = saturation / 100;
    hue = hue * Math.PI / 180;
    let x = ((Math.cos(hue) * saturation) + 1 ) / 2 * 100;
    return x;
  }

  hueToY(hue, saturation) {
    saturation = saturation / 100;
    hue = hue * Math.PI / 180;
    let y = ((Math.sin(hue) * saturation) + 1 ) / 2 * -100 + 100;
    return y;
  }

  HSLBackground(color){
    return {
      background:
      `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
    };
  }

  markers(theme) {
    return theme.color_swatches.map((color, i) => {
      return (
        <div
          key={i}
          className="marker"
          style={{left: `${this.hueToX(color.hue, color.saturation)}%`,
            top: `${this.hueToY(color.hue, color.saturation)}%`}}>
          <div style={ this.HSLBackground(color) }></div>
        </div>
      );
    });
  }

  themeBoxes() {
    return this.props.theme.color_swatches.map((color, i) => {
      return (
        <li
          key={i}
          draggable="false"
          aria-haspopup="true"
          data-index={0}
          style={ this.HSLBackground(color) } >
        </li>
      );
    });
  }

  saturationGradient(color){
    return{
      backgroundImage: `linear-gradient(
        to right,
        hsl(${color.hue}, 0%, ${color.lightness}%),
        hsl(${color.hue}, 25%, ${color.lightness}%),
        hsl(${color.hue}, 50%, ${color.lightness}%),
        hsl(${color.hue}, 75%, ${color.lightness}%),
        hsl(${color.hue}, 100%, ${color.lightness}%))`
    };
  }

  lightnessGradient(color){
    return{
      backgroundImage: `linear-gradient(
        to right,
        hsl(${color.hue}, ${color.saturation}%, 0%),
        hsl(${color.hue}, ${color.saturation}%, 5%),
        hsl(${color.hue}, ${color.saturation}%, 10%),
        hsl(${color.hue}, ${color.saturation}%, 15%),
        hsl(${color.hue}, ${color.saturation}%, 20%),
        hsl(${color.hue}, ${color.saturation}%, 30%),
        hsl(${color.hue}, ${color.saturation}%, 40%),
        hsl(${color.hue}, ${color.saturation}%, 60%),
        hsl(${color.hue}, ${color.saturation}%, 80%),
        hsl(${color.hue}, ${color.saturation}%, 100%))`
    };
  }

  firstOrLast(i){
    if (i === 0) {
      return "first-slider";
    } else if (i === 4) {
      return "last-slider";
    }
  }

  sliderList() {

    return this.props.theme.color_swatches.map((color, i) => {
      return (
        <li className="slider hsl" key={i} data-mode="hsl">
          <input
            type="range"
            className={`hue ${this.firstOrLast(i)}`}
            value={color.hue}
            id="hue"
            min="0"
            max="360"
            onChange={this.update(this.props.theme.color_swatches)}>
          </input>
          <input
            type="range"
            className={`saturation ${this.firstOrLast(i)}`}
            onChange={this.update(color.saturation)}
            style={this.saturationGradient(color)}
            id="saturation"
            min="0"
            max="100"
            defaultValue={color.saturation}></input>
          <input
            type="range"
            className={`lightness ${this.firstOrLast(i)}`}
            onChange={this.update(color.lightness)}
            style={this.lightnessGradient(color)}
            id="lightness"
            min="0"
            max="100"
            defaultValue={color.lightness}></input>
        </li>
      );
    });
  }

  // createDefaultColors() {
  //   const c0 = { hue: 348, saturation: 62, lightness: 42, ord: 0 };
  //   const c1 = { hue: 191, saturation: 96, lightness: 39, ord: 1 };
  //   const c2 = { hue: 213, saturation: 14, lightness: 85, ord: 2 };
  //   const c3 = { hue: 39, saturation: 85, lightness: 62, ord: 3 };
  //   const c4 = { hue: 270, saturation: 15, lightness: 12, ord: 4 };
  //   return [c0, c1, c2, c3, c4];
  // }

  render() {
    let { theme, user, loading } = this.props;

    // if (_.isEmpty(theme)) {
    //   theme = {
    //     title: "new theme",
    //     color_swatches: this.createDefaultColors(),
    //     user: user
    //   };
    // }
    if (loading || !theme.color_swatches) {
      return <h1>loading</h1>;
    }

    return(
      <section id="content">

        <div className="editor">

          <button className="save-button">Save</button>
          <div className="harmonyrule"></div>

          <div id="colorwheel"
              draggable="false2">

            <img alt="HSL Color Wheel"
              id="hsl-wheel"
              src={window.wheel}
              draggable="false" />

            { this.markers(theme) }

          </div>
        </div>

        <div className="theme">

          <ul className="themeBox">
            { this.themeBoxes(theme) }
          </ul>
        </div>
          <ol id="slider-list" className="group">
          { this.sliderList(theme) }
        </ol>
      </section>
    );
  }
}


export default Create;
