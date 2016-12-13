import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import InputRange from 'react-input-range';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      swatches: this.props.theme.color_swatches,
      color0: this.props.theme.color_swatches[0],
        color0hue: this.props.theme.color_swatches[0].hue,
        color0saturation: this.props.theme.color_swatches[0].saturation,
        color0lightness: this.props.theme.color_swatches[0].lightness,
      color1: this.props.theme.color_swatches[1],
        color1hue: this.props.theme.color_swatches[1].hue,
        color1saturation: this.props.theme.color_swatches[1].saturation,
        color1lightness: this.props.theme.color_swatches[1].lightness,
      color2: this.props.theme.color_swatches[2],
        color2hue: this.props.theme.color_swatches[2].hue,
        color2saturation: this.props.theme.color_swatches[2].saturation,
        color2lightness: this.props.theme.color_swatches[2].lightness,
      color3: this.props.theme.color_swatches[3],
        color3hue: this.props.theme.color_swatches[3].hue,
        color3saturation: this.props.theme.color_swatches[3].saturation,
        color3lightness: this.props.theme.color_swatches[3].lightness,
      color4: this.props.theme.color_swatches[4],
        color4hue: this.props.theme.color_swatches[4].hue,
        color4saturation: this.props.theme.color_swatches[4].saturation,
        color4lightness: this.props.theme.color_swatches[4].lightness,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sliderList = this.sliderList.bind(this);
    this.markers = this.markers.bind(this);
    this.updateHue = this.updateHue.bind(this);
    this.updateSaturation = this.updateSaturation.bind(this);
    this.updateLightness = this.updateLightness.bind(this);
    this.HSLBackground = this.HSLBackground.bind(this);
    }

  componentDidMount() {
    if (this.props.params.themeId) {
    this.props.fetchTheme(this.props.params.themeId);
    } //TODO : replace fetchTheme with ReceiveTheme if this.props.params.themeId
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      theme: nextProps.theme,
      swatches: nextProps.theme.color_swatches,
      color0: nextProps.theme.color_swatches[0],
      color1: nextProps.theme.color_swatches[1],
      color2: nextProps.theme.color_swatches[2],
      color3: nextProps.theme.color_swatches[3],
      color4: nextProps.theme.color_swatches[4]}
    );
  }
  //componentWillUnmount ==> dispatch resetCurrentTheme

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTheme(this.state.theme).
      then((data) => this.props.router.push(`/theme/${data.id}`));
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
      `hsl(${this.state.color0hue}, ${this.state.color0saturation}%, ${this.state.color0lightness}%)`
    };
  }

  markers() {
    return this.state.swatches.map((color, i) => {
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
    return this.state.swatches.map((color, i) => {
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


  // updateHue(hue) {
  //   let hues = [];
  //   let newSwatches;
  //
  //   return function (event) {
  //     // debugger;
  //     hues.push(event.target.value);
  //     if ( hues.length === 5 ) {
  //       newSwatches = this.state.theme.color_swatches;
  //       newSwatches = newSwatches.map((color, i) =>{
  //         color.hue = hues[i];
  //       });
  //       this.updateSwatches(newSwatches);
  //     }
  //   }.bind(this);
  // }
  //
  // updateSaturation(saturation) {
  //   let saturations = [];
  //   let newSwatches;
  //
  //   return function (event) {
  //     saturations.push(event.target.value);
  //     if ( saturations.length === 5 ) {
  //       newSwatches = this.state.theme.color_swatches;
  //       newSwatches = newSwatches.map((color, i) =>{
  //         color.saturation = saturations[i];
  //       });
  //       this.updateSwatches(newSwatches);
  //     }
  //   }.bind(this);
  //   // return event => this.setState({ [property]: event.target.value });
  // }
  // updateLightness(lightness) {
  //   let lightnesses = [];
  //   let newSwatches;
  //
  //   return function (event) {
  //     lightnesses.push(event.target.value);
  //     if ( lightnesses.length === 5 ) {
  //       newSwatches = this.state.theme.color_swatches;
  //       newSwatches = newSwatches.map((color, i) =>{
  //         color.lightness = lightnesses[i];
  //       });
  //       this.updateSwatches(newSwatches);
  //     }
  //   }.bind(this);
  //   // return event => this.setState({ [property]: event.target.value });
  // }
  //
  // updateSwatches(newSwatches) {
  //
  //   let themeCopy = this.state.theme;
  //   themeCopy.color_swatches = newSwatches;
  //   this.setState( { theme: themeCopy });
  // }

  updateHue(hue){
    return (event) => {
      this.setState({ [hue]: event.target.value });
    };
  }

  updateSaturation(saturation){
    return (event) => {
      this.setState({ [saturation]: event.target.value });
    };

  }

  updateLightness(lightness){
    return (event) => {
      this.setState({ [lightness]: event.target.value });
    };

  }

  sliderList() {

    return this.state.swatches.map((color, i) => {
      return (
        <li className="slider hsl" key={i} data-mode="hsl">
          <input
            type="range"
            className={`hue ${this.firstOrLast(i)}`}
            onChange={this.updateHue(`color${i}hue`)}
            id="hue"
            min="0"
            max="360"
            value={this.state.color0hue}
            >
          </input>
          <input
            type="range"
            className={`saturation ${this.firstOrLast(i)}`}
            onChange={this.updateSaturation(`color${i}saturation`)}
            style={this.saturationGradient(color)}
            id="saturation"
            min="0"
            max="100"
            value={this.state.color0saturation}></input>
          <input
            type="range"
            className={`lightness ${this.firstOrLast(i)}`}
            onChange={this.updateLightness(`color${i}lightness`)}
            style={this.lightnessGradient(color)}
            id="lightness"
            min="0"
            max="100"
            value={this.state.color0lightness}></input>
        </li>
      );
    });
  }


  render() {
    let { theme, user, loading } = this.props;

    if (loading || !theme.color_swatches) {
      return <h1>loading</h1>;
    }

    // debugger

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

            { this.markers() }

          </div>
        </div>

        <div className="theme">

          <ul className="themeBox">
            { this.themeBoxes() }
          </ul>
        </div>
          <ol id="slider-list" className="group">
          { this.sliderList() }
        </ol>
      </section>
    );
  }
}


export default Create;
