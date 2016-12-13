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
      lightness: this.state.color0lightness,
      selected: 'not-selected' };
  }

  color1() {
    return { hue: this.state.color1hue,
      saturation: this.state.color1saturation,
      lightness: this.state.color1lightness,
      selected: 'not-selected' };
  }

  color2() {
    return { hue: this.state.color2hue,
      saturation: this.state.color2saturation,
      lightness: this.state.color2lightness,
      selected: 'selected' };
  }

  color3() {
    return { hue: this.state.color3hue,
      saturation: this.state.color3saturation,
      lightness: this.state.color3lightness,
      selected: 'not-selected' };
  }

  color4() {
    return { hue: this.state.color4hue,
      saturation: this.state.color4saturation,
      lightness: this.state.color4lightness,
      selected: 'not-selected' };
  }

  selectColor(color) {
    this.color0.selected = 'not-selected';
    this.color1.selected = 'not-selected';
    this.color2.selected = 'not-selected';
    this.color3.selected = 'not-selected';
    this.color4.selected = 'not-selected';
    color.selected = 'selected';
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
    this.props.createTheme(this.state.theme).
      then((data) => this.props.router.push(`/theme/${data.id}`));
  }

  hueToX(hue, saturation) {
    saturation = saturation / 100;
    hue = hue * Math.PI / 180;
    return ((Math.cos(hue) * saturation) + 1 ) / 2 * 98;
  }

  hueToY(hue, saturation) {
    saturation = saturation / 100;
    hue = hue * Math.PI / 180;
    return ((Math.sin(hue) * saturation) + 1 ) / 2 * -98 + 100;
  }


  HSLBackground(color){
    return { background: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)` };
  }

  marker(color) {
      return (
        <div
          className={`marker ${color.selected}`}
          draggable="true"
          onClick={(event) =>(this.selectColor(color))}
          onDrag={(proxy, event) =>(console.log(`drag - X:${proxy.clientX} by Y:${proxy.clientX}`))}

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
            className={color.selected}
            draggable="false"
            aria-haspopup="true"
            data-index={0}
            onClick={(event) =>(this.selectColor(color))}
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

  sliders(color, colorString, pos){
    return(
      <li className={`slider hsl ${color.selected}`} data-mode="hsl">
        <input
          type="range"
          className={`hue ${this.firstOrLast(pos)} `}
          onChange={this.updateHue(`${colorString}hue`)}
          onClick={(event) =>(this.selectColor(color))}
          id="hue"
          min="0"
          max="360"
          value={color.hue}>
        </input>
        <input
          type="range"
          className={`saturation ${this.firstOrLast(pos)}`}
          onChange={this.updateSaturation(`${colorString}saturation`)}
          onClick={(event) =>(this.selectColor(color))}
          style={this.saturationGradient(color.hue, color.lightness)}
          id="saturation"
          min="0"
          max="100"
          value={color.saturation}></input>
        <input
          type="range"
          className={`lightness ${this.firstOrLast(pos)}`}
          onChange={this.updateLightness(`${colorString}lightness`)}
          onClick={(event) =>(this.selectColor(color))}
          style={this.lightnessGradient(color.hue, color.saturation)}
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
      <ol id='values-boxes'>
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
          <div className={`value-item ${color.selected}`}>
            <h5 className="value-type">HSL</h5>
            <ol className="color-format">
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


  render() {
    let { theme, user, loading } = this.props;

    if (loading || !theme.color_swatches) {
      return <h1>loading</h1>;
    }

    return(
      <section id="content">

        <div className="editor"
          draggable="false">

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

          { this.valuesBoxes() }
      </section>
    );
  }
}

export default Create;
