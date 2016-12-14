import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import InputRange from 'react-input-range';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      selected: 2,
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

  color0(format) {
    if (format === 'array') {
      return [this.state.color0hue,
              this.state.color0saturation,
              this.state.color0lightness];
    } else {
    return { hue: this.state.color0hue,
      saturation: this.state.color0saturation,
      lightness: this.state.color0lightness,
      ord: 0};
    }
  }

  color1(format) {
    if (format === 'array') {
      return [this.state.color1hue,
              this.state.color1saturation,
              this.state.color1lightness];
    } else {
    return { hue: this.state.color1hue,
      saturation: this.state.color1saturation,
      lightness: this.state.color1lightness,
      ord: 1};
    }
  }

  color2(format) {
    if (format === 'array') {
      return [this.state.color2hue,
              this.state.color2saturation,
              this.state.color2lightness];
    } else {
    return { hue: this.state.color2hue,
      saturation: this.state.color2saturation,
      lightness: this.state.color2lightness,
      ord: 2};
    }
  }

  color3(format) {
    if (format === 'array') {
      return [this.state.color3hue,
              this.state.color3saturation,
              this.state.color3lightness];
    } else {
    return { hue: this.state.color3hue,
      saturation: this.state.color3saturation,
      lightness: this.state.color3lightness,
      ord: 3};
    }
  }

  color4(format) {
    if (format === 'array') {
      return [this.state.color0hue,
              this.state.color0saturation,
              this.state.color0lightness];
    } else {
    return { hue: this.state.color4hue,
      saturation: this.state.color4saturation,
      lightness: this.state.color4lightness,
      ord: 4};
    }
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


  handleSubmit(e) {
    e.preventDefault();
    const color_swatches =  [
        this.color0(),
        this.color1(),
        this.color2(),
        this.color3(),
        this.color4() ];

    const theme = {
      title: "untitled theme",
      color_swatches: color_swatches
    };
    this.props.createTheme(theme).
      then((data) => this.props.router.push(`/theme/${data.id}`));
  }

  hueToX(hue, saturation) {
    saturation = saturation / 100;
    hue = hue * Math.PI / 180;
    return ((Math.cos(hue) * saturation) + 1 ) / 2 * 100;
  }

  hueToY(hue, saturation) {
    saturation = saturation / 100;
    hue = hue * Math.PI / 180;
    return ((Math.sin(hue) * saturation) + 1 ) / 2 * -100 + 100;
  }



  HSLBackground(color){
    return { background: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)` };
  }


 // ------------------
  XYtoHueAndSaturation(x, y) {
    const saturation =  this.distanceFromOrigin(x, y) * 100;
    if ( x > y) {
    console.log("angle: ", this.toDegrees(Math.acos(y / saturation)));
    } else {
      console.log("angle: ", this.toDegrees(Math.acos(x / saturation)));
    }
  }

  toDegrees(angle) {
    return angle * (180 / Math.PI);
  }

  distanceFromOrigin(x, y) {
    return Math.sqrt(x*x + y*y);
  }


  getCoordinates(color) {
    return (event) => {
      const diameter = event.target.offsetParent.offsetParent.clientWidth;
      let markerLeft = event.target.offsetParent.offsetLeft;
      let markerTop = event.target.offsetParent.offsetTop;
      const originOffset = -0.5;
      const scaleFactor = 2;
      markerLeft = (( markerLeft / diameter ) + originOffset) * scaleFactor;
      markerTop = (( markerTop / diameter ) + originOffset) * scaleFactor;
      console.log('markerLeft: ', markerLeft);
      console.log('markerTop: ', markerTop);
      this.XYtoHueAndSaturation(markerLeft, markerTop);
    };
  }
  // ---------

  marker(color) {
      return (
        <div
          className={`marker ${this.selectedClass(color)}`}
          draggable="false"
          onClick={this.getCoordinates(color)}
          onMouseDown={this.selectColor(color.ord)}

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
            className={this.selectedClass(color)}
            draggable="false"
            aria-haspopup="true"
            data-index={0}
            onMouseDown={this.selectColor(color.ord)}
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

  saturationGradient(color){
    if (this.isSelected(color)){
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
  }

  lightnessGradient(color){
    if (this.isSelected(color)){
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
  }

  firstOrLast(i){
    if (i === 0) {
      return "first-slider";
    } else if (i === 4) {
      return "last-slider";
    }
  }

  selectColor(colorId) {
    return (event) => { this.setState({ selected: colorId }); };
  }

  isSelected(color) {
    return (color.ord === this.state.selected);
  }

  selectedClass(color) {
    if (this.isSelected(color)) {
      return "selected";
    } else {
      return "not-selected";
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

  sliders(color, colorString, pos){
    return(
      <li className={`slider hsl ${this.selectedClass(color)}`} data-mode="hsl">
        <input
          type="range"
          className={`hue ${this.firstOrLast(pos)}  ${this.selectedClass(color)}`}
          onChange={this.updateHue(`${colorString}hue`)}
          onMouseDown={this.selectColor(color.ord)}
          id="hue"
          min="0"
          max="360"
          value={color.hue}>
        </input>
        <input
          type="range"
          className={`saturation ${this.firstOrLast(pos)}  ${this.selectedClass(color)}`}
          onChange={this.updateSaturation(`${colorString}saturation`)}
          onMouseDown={this.selectColor(color.ord)}
          style={this.saturationGradient(color)}
          id="saturation"
          min="0"
          max="100"
          value={color.saturation}></input>
        <input
          type="range"
          className={`lightness ${this.firstOrLast(pos)}  ${this.selectedClass(color)}`}
          onChange={this.updateLightness(`${colorString}lightness`)}
          onMouseDown={this.selectColor(color.ord)}
          style={this.lightnessGradient(color)}
          id="lightness"
          min="0"
          max="100"
          value={color.lightness}></input>
      </li>
    );
  }

  sliderList() {
      return (
        <ol id="slider-list" className="group">
          {this.sliders(this.color0(), 'color0', 0)}
          {this.sliders(this.color1(), 'color1', 1)}
          {this.sliders(this.color2(), 'color2', 2)}
          {this.sliders(this.color3(), 'color3', 3)}
          {this.sliders(this.color4(), 'color4', 4)}
        </ol>
      );
  }

  valuesBoxes() {
    return (
      <ol id='values-boxes' className='group'>
        <li className='values-box'>{this.values(this.color0())}</li>
        <li className='values-box'>{this.values(this.color1())}</li>
        <li className='values-box'>{this.values(this.color2())}</li>
        <li className='values-box'>{this.values(this.color3())}</li>
        <li className='values-box'>{this.values(this.color4())}</li>
      </ol>
    );
  }

  values(color) {
    return(
          <div className={`value-item ${this.selectedClass(color)}`}
            onMouseDown={this.selectColor(color.ord)}>
            <h5 className="value-type">HSL</h5>
            <ol className="color-format group">
              <li>
                {color.hue}
              </li>
              <li>
                {color.saturation}
              </li>
              <li>
                {color.lightness}
              </li>
            </ol>
          </div>
    );
  }

  updateTheme(){
    return () => {
      this.setState(
        { theme: {
          color_swatches: [
            this.color0(),
            this.color1(),
            this.color2(),
            this.color3(),
            this.color4()]
        }}
      );
    };
  }


  saveButton(){
    if (this.props.user){
      return(
        <form onSubmit={this.handleSubmit}>
          <input type="submit" className="save-button" value="Save"></input>
        </form>
      );
    } else {
      return(
        <form onClick={this.updateTheme() }>
          <input type="submit"

            onClick={this.props.showSignIn}
            className="save-button"
            value="Log In to Save"></input>
        </form>
      );
    }
  }


  render() {
    let { theme, user, loading } = this.props;

    if (loading || !theme.color_swatches) {
      return <h1>loading</h1>;
    }

    return(
      <section id="content">

        <div className="editor"
          draggable="false">
          {this.saveButton()}
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

          { this.valuesBoxes() }
      </section>
    );
  }
}

export default Create;
