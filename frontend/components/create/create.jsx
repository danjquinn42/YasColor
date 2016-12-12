import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "",
      user: window.currentUser,
      colors: [[348,62,41], [191,96,39], [213,14,85], [39,85,62], [270,6,12]] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTheme(this.props.params.themeId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTheme(this.state)
    .then((data) => this.props.router.push(`/theme/${data.id}`));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
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

  markers(theme) {
    return theme.color_swatches.map((color, i) => {
      const hsl = {
        background:
        `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
      };
      return (
        <div
          key={i}
          className="marker"
          style={{left: `${this.hueToX(color.hue, color.saturation)}%`,
            top: `${this.hueToY(color.hue, color.saturation)}%`}}>
          <div style={ hsl }></div>
        </div>
      );
    });
  }

  themeBoxes(theme) {
    return theme.color_swatches.map((color, i) => {
      const hsl = {
        background:
        `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
      };
      return (
        <li
          key={i}
          draggable="false"
          aria-haspopup="true"
          data-index={0}
          style={ hsl } >
        </li>
      );
    });
  }

  sliderList() {

  }

  createDefaultColors() {
    const c0 = { hue: 348, saturation: 62, lightness: 42, ord: 0 };
    const c1 = { hue: 191, saturation: 96, lightness: 39, ord: 1 };
    const c2 = { hue: 213, saturation: 14, lightness: 85, ord: 2 };
    const c3 = { hue: 39, saturation: 85, lightness: 62, ord: 3 };
    const c4 = { hue: 270, saturation: 15, lightness: 12, ord: 4 };
    return [c0, c1, c2, c3, c4];
  }

  render() {
    let { theme } = this.props;

    if (_.isEmpty(theme)) {
      theme = {
        id: 0,
        title: "new theme",
        color_swatches: this.createDefaultColors(),
        user: window.currentUser
      };
    }
    console.log(theme);

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
          <div className="sliderList">
          { this.sliderList() }
          </div>
      </section>
    );
  }
}


export default Create;
