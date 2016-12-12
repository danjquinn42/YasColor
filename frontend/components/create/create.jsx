import React from 'react';
import { withRouter } from 'react-router';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "",
      user: window.currentUser,
      colors: [[348,62,41], [191,96,39], [213,14,85], [39,85,62], [270,6,12]] };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  markers() {
    return this.state.colors.map((color, i) => {
      const hsl = {
        background: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
      };
      return (
        <div
          key={i}
          className="marker"
          style={{left: `${this.hueToX(color[0], color[1])}%`,
            top: `${this.hueToY(color[0], color[1])}%`}}>
          <div style={ hsl }></div>
        </div>
      );
    });
  }

  themeBoxes() {
    return this.state.colors.map((color, i) => {
      const hsl = {
        background: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
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

  render() {

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
          <div className="sliderList">
          { this.sliderList() }
          </div>
      </section>
    );
  }
}
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   version="1.1"
//   className="markertails"
//   preserveAspectRatio="xMidYMin meet"
//   viewBox="-10 -10 120 120">
// </svg>
// <g>
//   <path d="M 50,50 L 87.17996610356089,52.8107153071884 A 4,4,0,1,0,86.93011365902355,44.860281609698625Z">
//   </path>
//   <path d="M 50,50 L 29.18501431060884,46.39633925702751 A 4,4,0,1,0,29.308478968931535,54.25569705463762Z">
//   </path>
//   <path d="M 50,50 L 99.68,53.98717945420068 A 4,4,0,1,0,99.68,46.01282054579932Z">
//   </path>
//   <path d="M 50,50 L 2.905266605764254,45.273893089882925 A 4,4,0,1,0,2.7800544082551184,53.244493537156806Z">
//   </path>
//   <path d="M 50,50 L 97.01468897296326,55.465255783175024 A 4,4,0,1,0,97.2650824737454,47.497605396815594Z">
//   </path>
// </g>
//
//

export default Create;
