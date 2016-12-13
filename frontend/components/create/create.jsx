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
      color0hue: this.props.theme.color_swatches[0].hue,
      color0saturation: this.props.theme.color_swatches[0].saturation,
      color0lightness: this.props.theme.color_swatches[0].lightness,
      color1hue: this.props.theme.color_swatches[1].hue,
      color1saturation: this.props.theme.color_swatches[1].saturation,
      color1lightness: this.props.theme.color_swatches[1].lightness,
      color2hue: this.props.theme.color_swatches[2].hue,
      color2saturation: this.props.theme.color_swatches[2].saturation,
      color2lightness: this.props.theme.color_swatches[2].lightness,
      color3hue: this.props.theme.color_swatches[3].hue,
      color3saturation: this.props.theme.color_swatches[3].saturation,
      color3lightness: this.props.theme.color_swatches[3].lightness,
      color4hue: this.props.theme.color_swatches[4].hue,
      color4saturation: this.props.theme.color_swatches[4].saturation,
      color4lightness: this.props.theme.color_swatches[4].lightness
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sliderList = this.sliderList.bind(this);
    this.marker = this.marker.bind(this);
    this.updateHue = this.updateHue.bind(this);
    this.updateSaturation = this.updateSaturation.bind(this);
    this.updateLightness = this.updateLightness.bind(this);
    this.HSLBackground = this.HSLBackground.bind(this);
    }

    color0() {
      return { hue: this.state.color0hue,
        saturation: this.state.color0saturation,
        lightness: this.state.color0lightness };
    }

    color1() {
      return { hue: this.state.color1hue,
        saturation: this.state.color1saturation,
        lightness: this.state.color1lightness };
    }

    color2() {
      return { hue: this.state.color2hue,
        saturation: this.state.color2saturation,
        lightness: this.state.color2lightness };
    }

    color3() {
      return { hue: this.state.color3hue,
        saturation: this.state.color3saturation,
        lightness: this.state.color3lightness };
    }

    color4() {
      return { hue: this.state.color4hue,
        saturation: this.state.color4saturation,
        lightness: this.state.color4lightness };
    }

  componentDidMount() {
    if (this.props.params.themeId) {
    this.props.fetchTheme(this.props.params.themeId);
    }
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      theme: nextProps.theme,
      swatches: nextProps.theme.color_swatches,
      color0hue: nextProps.theme.color_swatches[0].hue,
      color0saturation: nextProps.theme.color_swatches[0].saturation,
      color0lightness: nextProps.theme.color_swatches[0].lightness,
      color1hue: nextProps.theme.color_swatches[1].hue,
      color1saturation: nextProps.theme.color_swatches[1].saturation,
      color1lightness: nextProps.theme.color_swatches[1].lightness,
      color2hue: nextProps.theme.color_swatches[2].hue,
      color2saturation: nextProps.theme.color_swatches[2].saturation,
      color2lightness: nextProps.theme.color_swatches[2].lightness,
      color3hue: nextProps.theme.color_swatches[3].hue,
      color3saturation: nextProps.theme.color_swatches[3].saturation,
      color3lightness: nextProps.theme.color_swatches[3].lightness,
      color4hue: nextProps.theme.color_swatches[4].hue,
      color4saturation: nextProps.theme.color_swatches[4].saturation,
      color4lightness: nextProps.theme.color_swatches[4].lightness
    });
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
    return { background: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)` };
  }

  marker(color) {
      return (
        <div
          className="marker"
          style={{left: `${this.hueToX(color.hue, color.saturation)}%`,
            top: `${this.hueToY(color.hue, color.saturation)}%`}}>
          <div style={ this.HSLBackground(color) }></div>
        </div>
      );
  }

  themeBoxes() {
      const oneBox = (color) => {
        return (
          <li
          draggable="false"
          aria-haspopup="true"
          data-index={0}
          style={{
            background:
            `hsl(${color.hue},
              ${color.saturation}%,
              ${color.lightness}%)` }} >
          </li>
        );
      };

      return (
        <ul className="themeBox">
          {oneBox(this.color0())}
          {oneBox(this.color1())}
          {oneBox(this.color2())}
          {oneBox(this.color3())}
          {oneBox(this.color4())}
        </ul>
      );
  }

  saturationGradient(hue, lightness){
    return{
      backgroundImage: `linear-gradient(
        to right,
        hsl(${hue}, 0%, ${lightness}%),
        hsl(${hue}, 25%, ${lightness}%),
        hsl(${hue}, 50%, ${lightness}%),
        hsl(${hue}, 75%, ${lightness}%),
        hsl(${hue}, 100%, ${lightness}%))`
    };
  }

  lightnessGradient(hue, saturation){
    return{
      backgroundImage: `linear-gradient(
        to right,
        hsl(${hue}, ${saturation}%, 0%),
        hsl(${hue}, ${saturation}%, 5%),
        hsl(${hue}, ${saturation}%, 10%),
        hsl(${hue}, ${saturation}%, 15%),
        hsl(${hue}, ${saturation}%, 20%),
        hsl(${hue}, ${saturation}%, 30%),
        hsl(${hue}, ${saturation}%, 40%),
        hsl(${hue}, ${saturation}%, 60%),
        hsl(${hue}, ${saturation}%, 80%),
        hsl(${hue}, ${saturation}%, 100%))`
    };
  }

  firstOrLast(i){
    if (i === 0) {
      return "first-slider";
    } else if (i === 4) {
      return "last-slider";
    }
  }


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
      return (
        <ol id="slider-list" className="group">
        <li className="slider hsl"  data-mode="hsl">
          <input
            type="range"
            className={`hue ${this.firstOrLast(0)}`}
            onChange={this.updateHue(`color0hue`)}
            id="hue"
            min="0"
            max="360"
            value={this.state.color0hue}>
          </input>
          <input
            type="range"
            className={`saturation ${this.firstOrLast(0)}`}
            onChange={this.updateSaturation(`color0saturation`, `color0`)}
            style={this.saturationGradient(this.state.color0hue, this.state.color0lightness)}
            id="saturation"
            min="0"
            max="100"
            value={this.state.color0saturation}></input>
          <input
            type="range"
            className={`lightness ${this.firstOrLast(0)}`}
            onChange={this.updateLightness(`color0lightness`)}
            style={this.lightnessGradient(this.state.color0hue, this.state.color0saturation)}
            id="lightness"
            min="0"
            max="100"
            value={this.state.color0lightness}></input>
        </li>


        <li className="slider hsl"  data-mode="hsl">
          <input
            type="range"
            className={`hue ${this.firstOrLast(1)}`}
            onChange={this.updateHue(`color1hue`)}
            id="hue"
            min="0"
            max="360"
            value={this.state.color1hue}>
          </input>
          <input
            type="range"
            className={`saturation ${this.firstOrLast(1)}`}
            onChange={this.updateSaturation(`color1saturation`, `color1`)}
            style={this.saturationGradient(this.state.color1hue, this.state.color1lightness)}
            id="saturation"
            min="0"
            max="100"
            value={this.state.color1saturation}></input>
          <input
            type="range"
            className={`lightness ${this.firstOrLast(1)}`}
            onChange={this.updateLightness(`color1lightness`)}
            style={this.lightnessGradient(this.state.color1hue, this.state.color1saturation)}
            id="lightness"
            min="0"
            max="100"
            value={this.state.color1lightness}></input>
        </li>


        <li className="slider hsl"  data-mode="hsl">
          <input
            type="range"
            className={`hue ${this.firstOrLast(2)}`}
            onChange={this.updateHue(`color2hue`)}
            id="hue"
            min="0"
            max="360"
            value={this.state.color2hue}>
          </input>
          <input
            type="range"
            className={`saturation ${this.firstOrLast(2)}`}
            onChange={this.updateSaturation(`color2saturation`, `color2`)}
            style={this.saturationGradient(this.state.color2hue, this.state.color2lightness)}
            id="saturation"
            min="0"
            max="100"
            value={this.state.color2saturation}></input>
          <input
            type="range"
            className={`lightness ${this.firstOrLast(2)}`}
            onChange={this.updateLightness(`color2lightness`)}
            style={this.lightnessGradient(this.state.color2hue, this.state.color2saturation)}
            id="lightness"
            min="0"
            max="100"
            value={this.state.color2lightness}></input>
        </li>


        <li className="slider hsl"  data-mode="hsl">
          <input
            type="range"
            className={`hue ${this.firstOrLast(3)}`}
            onChange={this.updateHue(`color3hue`)}
            id="hue"
            min="0"
            max="360"
            value={this.state.color3hue}>
          </input>
          <input
            type="range"
            className={`saturation ${this.firstOrLast(3)}`}
            onChange={this.updateSaturation(`color3saturation`, `color3`)}
            style={this.saturationGradient(this.state.color3hue, this.state.color3lightness)}
            id="saturation"
            min="0"
            max="100"
            value={this.state.color3saturation}></input>
          <input
            type="range"
            className={`lightness ${this.firstOrLast(3)}`}
            onChange={this.updateLightness(`color3lightness`)}
            style={this.lightnessGradient(this.state.color3hue, this.state.color3saturation)}
            id="lightness"
            min="0"
            max="100"
            value={this.state.color3lightness}></input>
        </li>


        <li className="slider hsl"  data-mode="hsl">
          <input
            type="range"
            className={`hue ${this.firstOrLast(4)}`}
            onChange={this.updateHue(`color4hue`)}
            id="hue"
            min="0"
            max="360"
            value={this.state.color4hue}>
          </input>
          <input
            type="range"
            className={`saturation ${this.firstOrLast(4)}`}
            onChange={this.updateSaturation(`color4saturation`, `color4`)}
            style={this.saturationGradient(this.state.color4hue, this.state.color4lightness)}
            id="saturation"
            min="0"
            max="100"
            value={this.state.color4saturation}></input>
          <input
            type="range"
            className={`lightness ${this.firstOrLast(4)}`}
            onChange={this.updateLightness(`color4lightness`)}
            style={this.lightnessGradient(this.state.color4hue, this.state.color4saturation)}
            id="lightness"
            min="0"
            max="100"
            value={this.state.color4lightness}></input>
        </li>
      </ol>


      );
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

            {this.marker(this.color0())}
            {this.marker(this.color1())}
            {this.marker(this.color2())}
            {this.marker(this.color3())}
            {this.marker(this.color4())}

          </div>
        </div>

        <div className="theme">

          { this.themeBoxes() }

        </div>

          { this.sliderList() }
      </section>
    );
  }
}

export default Create;
