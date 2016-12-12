
constructor(props){
    super(props);
}

getInitialState(){
  return {"showHideSidenav":"hidden"};
}

render() {
    return (
        <div className="header">
            <i className="border hide-on-small-and-down"></i>
            <div className="container">
                <a ref="btn"
                  onClick={this.toggleSidenav.bind(this)}
                  href="#"
                  className="btn-menu show-on-small"><i></i>
                  </a>
                <Menu className="menu hide-on-small-and-down"/>
                <Sidenav className={this.props.showHideSidenav}/>
            </div>
        </div>
    )
}

toggleSidenav() {
    var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
    this.setState({"showHideSidenav":css});
}

_______

<section id="content">
  <div className="page-editor shrunk-wheel">
    // <div className="create-actions">
    //   <div className="save-theme ctooltip">
    //     <a
    //       href="javascript:void(0)"
    //       title
    //       className="btn primary save-button"
    //       id="myButton">Save</a>
    //     <span
    //       className="mini-spinner"
    //       style={{display: 'none'}}>
    //     </span>
    //   </div>
    //   <div className="edit-themeName"></div>
    // </div>
    // <a className="sprite30x30 image-uploader tooltip-left"
    //   data-tooltip="Create from Image" />
    <div className="harmonyrule" aria-haspopup="true"></div>
    <div className="colorwheel">
      <img
        alt="RYB Color Wheel"
        src="/build01/resource/img/kuler/color_wheel.webp"
        draggable="false" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="markertails"
        preserveAspectRatio="xMidYMin meet"
        viewBox="-10 -10 120 120">
        <g>
          <path d="M 50,50 L 87.17996610356089,52.8107153071884 A 4,4,0,1,0,86.93011365902355,44.860281609698625Z">
          </path>
          <path d="M 50,50 L 29.18501431060884,46.39633925702751 A 4,4,0,1,0,29.308478968931535,54.25569705463762Z">
          </path>
          <path d="M 50,50 L 99.68,53.98717945420068 A 4,4,0,1,0,99.68,46.01282054579932Z">
          </path>
          <path d="M 50,50 L 2.905266605764254,45.273893089882925 A 4,4,0,1,0,2.7800544082551184,53.244493537156806Z">
          </path>
          <path d="M 50,50 L 97.01468897296326,55.465255783175024 A 4,4,0,1,0,97.2650824737454,47.497605396815594Z">
          </path>
        </g>
      </svg>
      <div
        className="marker"
        style={{left: '82.4815%', top: '43.8221%'}}>
        <div style={{backgroundColor: 'rgb(255, 67, 64)'}}>
        </div>
      </div>
      <div
        className="marker selected"
        style={{left: '23.5027%', top: '45.3377%'}}>
        <div style={{backgroundColor: 'rgb(132, 232, 162)'}}>
        </div>
      </div>
      <div
        className="marker basecolor"
        style={{left: '95%', top: '45%', transform: 'rotate(0deg)'}}>
        <div style={{backgroundColor: 'rgb(255, 0, 0)'}}>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="xMidYMin meet"
          viewBox="0 0 100 100">
          <path
            d="M 50,50 L 0,0 L 0,100 Z"
            style={{backgroundColor: 'rgb(255, 0, 0)'}}>
          </path>
        </svg>
      </div>
      <div
        className="marker"
        style={{left: '-2.49414%', top: '44.2539%'}}>
        <div style={{backgroundColor: 'rgb(12, 232, 70)'}}>
        </div>
      </div>
      <div
        className="marker"
        style={{left: '92.4766%', top: '46.492%'}}>
        <div style={{backgroundColor: 'rgb(255, 13, 27)'}}>
        </div>
      </div>
    </div>
    <div className="theme">
      <ul className="themeBox">
        <li
          draggable="false"
          aria-haspopup="true"
          data-index={0}
          style={{background: 'rgb(255, 67, 64)'}}
          className>
          <div className="tooltip">Set as Base Color
          </div>
          <div className="tooltip-arrow">
          </div>
          <svg
            className="base-indicator"
            data-index={0}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
            preserveAspectRatio="none meet"
            viewBox="0 0 100 100">
            <path
              className="chevron"
              d="M 0,100 L 100,100 L 50,0 L 0,100">
            </path>
          </svg>
        </li>
        <li
          draggable="false"
          aria-haspopup="true"
          data-index={1}
          style={{background: 'rgb(132, 232, 162)'}}
          className="selected">
          <div className="tooltip">Set as Base Color
          </div>
          <div className="tooltip-arrow">
          </div>
          <svg
            className="base-indicator"
            data-index={1}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
            preserveAspectRatio="none meet"
            viewBox="0 0 100 100">
            <path
              className="chevron"
              d="M 0,100 L 100,100 L 50,0 L 0,100">
            </path>
          </svg>
        </li>
        <li
          draggable="false"
          aria-haspopup="true"
          data-index={2}
          style={{background: 'rgb(255, 0, 0)'}}
          className="basecolor">
          <div className="tooltip">Base Color
          </div>
          <div className="tooltip-arrow">
          </div>
          <svg
            className="base-indicator"
            data-index={2}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
            preserveAspectRatio="none meet"
            viewBox="0 0 100 100">
            <path
              className="chevron"
              d="M 0,100 L 100,100 L 50,0 L 0,100">
            </path>
          </svg>
        </li>
        <li
          draggable="false"
          aria-haspopup="true"
          data-index={3}
          style={{background: 'rgb(12, 232, 70)'}}>
          <div className="tooltip">Set as Base Color
          </div>
          <div className="tooltip-arrow">
          </div>
          <svg
            className="base-indicator"
            data-index={3}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
            preserveAspectRatio="none meet"
            viewBox="0 0 100 100">
            <path
              className="chevron"
              d="M 0,100 L 100,100 L 50,0 L 0,100">
            </path>
          </svg>
        </li>
        <li
          draggable="false"
          aria-haspopup="true"
          data-index={4}
          style={{background: 'rgb(255, 13, 27)'}}>
          <div className="tooltip">Set as Base Color
          </div>
          <div className="tooltip-arrow">
          </div>
          <svg
            className="base-indicator"
            data-index={4}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
            preserveAspectRatio="none meet"
            viewBox="0 0 100 100">
            <path
              className="chevron"
              d="M 0,100 L 100,100 L 50,0 L 0,100">
            </path>
          </svg>
        </li>
      </ul>
    </div>
    <div className="sliderList">
      <div className="slider hsb" data-mode="rgb">
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-220"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={360}
              aria-valuenow={1}
              aria-valuetext={1}
              style={{left: 1, backgroundColor: 'rgb(255, 67, 64)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="r"
          type="range"
          min={0}
          max={360}
          step={1}
          id="fd-slider-form-elem-220"
          defaultValue={255}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-221"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar" style={{}}>
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={75}
              aria-valuetext={75}
              style={{left: 143, backgroundColor: 'rgb(255, 67, 64)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="g"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-221"
          defaultValue={83}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-222"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar" style={{}}>
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-valuetext={100}
              style={{left: 190, backgroundColor: 'rgb(255, 67, 64)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="b"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-222"
          defaultValue={13}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-223"
          role="application"
          aria-disabled="false"
          style={{marginTop: 20}}>
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar" style={{}}>
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-valuetext={100}
              style={{left: 0, backgroundColor: 'rgb(255, 67, 64)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="k"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-223"
          defaultValue={50}
          className="fd-form-element-hidden" />
      </div>
      <div
        className="slider hsb selected"
        data-mode="rgb">
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-224"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={360}
              aria-valuenow={138}
              aria-valuetext={138}
              style={{left: 72, backgroundColor: 'rgb(132, 232, 162)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="r"
          type="range"
          min={0}
          max={360}
          step={1}
          id="fd-slider-form-elem-224"
          defaultValue={232}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-225"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span
              className="fd-slider-bar"
              style={{background: 'linear-gradient(to right, rgb(232, 232, 232) 0%, rgb(0, 232, 70) 100%)'}}>
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={43}
              aria-valuetext={43}
              style={{left: 81, backgroundColor: 'rgb(132, 232, 162)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="g"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-225"
          defaultValue={44}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-226"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span
              className="fd-slider-bar"
              style={{background: 'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(145, 255, 178) 100%)'}}>
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={91}
              aria-valuetext={91}
              style={{left: 171, backgroundColor: 'rgb(132, 232, 162)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="b"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-226"
          defaultValue={12}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-227"
          role="application"
          aria-disabled="false"
          style={{marginTop: 20}}>
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span
              className="fd-slider-bar"
              style={{background: 'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(145, 255, 178) 100%)'}}>
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={91}
              aria-valuetext={91}
              style={{left: 0, backgroundColor: 'rgb(132, 232, 162)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="k"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-227"
          defaultValue={50}
          className="fd-form-element-hidden" />
      </div>
      <div className="slider hsb" data-mode="rgb">
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-228"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={360}
              aria-valuenow={0}
              aria-valuetext={0}
              style={{left: 0, backgroundColor: 'rgb(255, 0, 0)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="r"
          type="range"
          min={0}
          max={360}
          step={1}
          id="fd-slider-form-elem-228"
          defaultValue={255}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-229"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-valuetext={100}
              style={{left: 190, backgroundColor: 'rgb(255, 0, 0)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="g"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-229"
          defaultValue={0}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-230"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-valuetext={100}
              style={{left: 190, backgroundColor: 'rgb(255, 0, 0)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="b"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-230"
          defaultValue={0}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-231"
          role="application"
          aria-disabled="false"
          style={{marginTop: 20}}>
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-valuetext={100}
              style={{left: 0, backgroundColor: 'rgb(255, 0, 0)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="k"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-231"
          defaultValue={50}
          className="fd-form-element-hidden" />
      </div>
      <div className="slider hsb" data-mode="rgb">
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-232"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={360}
              aria-valuenow={136}
              aria-valuetext={136}
              style={{left: 72, backgroundColor: 'rgb(12, 232, 70)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="r"
          type="range"
          min={0}
          max={360}
          step={1}
          id="fd-slider-form-elem-232"
          defaultValue={232}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-233"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={95}
              aria-valuetext={95}
              style={{left: 181, backgroundColor: 'rgb(12, 232, 70)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="g"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-233"
          defaultValue={12}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-234"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={91}
              aria-valuetext={91}
              style={{left: 173, backgroundColor: 'rgb(12, 232, 70)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="b"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-234"
          defaultValue={122}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-235"
          role="application"
          aria-disabled="false"
          style={{marginTop: 20}}>
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={91}
              aria-valuetext={91}
              style={{left: 0, backgroundColor: 'rgb(12, 232, 70)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="k"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-235"
          defaultValue={50}
          className="fd-form-element-hidden" />
      </div>
      <div className="slider hsb" data-mode="rgb">
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-236"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={360}
              aria-valuenow={356}
              aria-valuetext={356}
              style={{left: 188, backgroundColor: 'rgb(255, 13, 27)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="r"
          type="range"
          min={0}
          max={360}
          step={1}
          id="fd-slider-form-elem-236"
          defaultValue={255}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-237"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={95}
              aria-valuetext={95}
              style={{left: 181, backgroundColor: 'rgb(255, 13, 27)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="g"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-237"
          defaultValue={13}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-238"
          role="application"
          aria-disabled="false">
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-valuetext={100}
              style={{left: 190, backgroundColor: 'rgb(255, 13, 27)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="b"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-238"
          defaultValue={255}
          className="fd-form-element-hidden" />
        <span
          className="fd-slider "
          id="fd-slider-fd-slider-form-elem-239"
          role="application"
          aria-disabled="false"
          style={{marginTop: 20}}>
          <span className="fd-slider-wrapper">
            <span className="fd-slider-inner">
            </span>
            <span className="fd-slider-bar">
            </span>
            <span
              tabindex={0}
              className="fd-slider-handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              aria-valuetext={100}
              style={{left: 0, backgroundColor: 'rgb(255, 13, 27)'}}>&nbsp;
            </span>
          </span>
        </span>
        <input
          data-comp="k"
          type="range"
          min={0}
          max={100}
          step={1}
          id="fd-slider-form-elem-239"
          defaultValue={50}
          className="fd-form-element-hidden" />
      </div>
    </div>
    <div className="themevalues">
      <div className="values">
        <div className="color-values" data-mode="cmyk">
          <div className="color-mode-text">
            <span className>CMYK
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="c"
            min={0}
            max={100}
            defaultValue
            tabindex={50} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="m"
            min={0}
            max={100}
            defaultValue
            tabindex={51} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="y"
            min={0}
            max={100}
            defaultValue
            tabindex={52} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="k"
            min={0}
            max={100}
            tabindex={53} />
        </div>
        <div className="color-values" data-mode="rgb">
          <div className="color-mode-text">
            <span className>RGB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="r"
            min={0}
            max={255}
            tabindex={70} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="g"
            min={0}
            max={255}
            tabindex={71} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="b"
            min={0}
            max={255}
            defaultValue
            tabindex={72} />
        </div>
        <div className="color-values" data-mode="lab">
          <div className="color-mode-text">
            <span className>LAB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="l"
            min={0}
            max={100}
            tabindex={85} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="a"
            min={-128}
            max={127}
            tabindex={86} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="b"
            min={-128}
            max={127}
            defaultValue
            tabindex={87} />
        </div>
        <div
          className="color-values color-mode"
          data-mode="hsv">
          <div className="color-mode-text">
            <span className>HSB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="h"
            min={0}
            max={359}
            tabindex={100} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="s"
            min={0}
            max={100}
            tabindex={101} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="v"
            min={0}
            max={100}
            defaultValue
            tabindex={102} />
        </div>
        <div
          className="color-values always-show"
          data-mode="hex">
          <div className="color-mode-text">
            <span>HEX
            </span>
          </div>
          <input
            data-tab="true"
            type="text"
            className="always-show"
            pattern="#?[A-Fa-f0-9]*"
            data-comp="hex"
            defaultValue
            tabindex={115} />
        </div>
        <div
          className="color-values always-show"
          data-mode="name">
          <div className="color-mode-text">
            <span>Name
            </span>
          </div>
          <input
            data-tab="false"
            type="text"
            className="always-show"
            data-comp="name"
            defaultValue />
        </div>
      </div>
      <div className="values selected">
        <div className="color-values" data-mode="cmyk">
          <div className="color-mode-text">
            <span className>CMYK
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="c"
            min={0}
            max={100}
            defaultValue
            tabindex={54} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="m"
            min={0}
            max={100}
            defaultValue
            tabindex={55} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="y"
            min={0}
            max={100}
            defaultValue
            tabindex={56} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="k"
            min={0}
            max={100}
            tabindex={57} />
        </div>
        <div className="color-values" data-mode="rgb">
          <div className="color-mode-text">
            <span className>RGB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="r"
            min={0}
            max={255}
            tabindex={73} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="g"
            min={0}
            max={255}
            tabindex={74} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="b"
            min={0}
            max={255}
            defaultValue
            tabindex={75} />
        </div>
        <div className="color-values" data-mode="lab">
          <div className="color-mode-text">
            <span className>LAB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="l"
            min={0}
            max={100}
            tabindex={88} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="a"
            min={-128}
            max={127}
            tabindex={89} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="b"
            min={-128}
            max={127}
            defaultValue
            tabindex={90} />
        </div>
        <div
          className="color-values color-mode"
          data-mode="hsv">
          <div className="color-mode-text">
            <span className>HSB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="h"
            min={0}
            max={359}
            tabindex={103} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="s"
            min={0}
            max={100}
            tabindex={104} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="v"
            min={0}
            max={100}
            defaultValue
            tabindex={105} />
        </div>
        <div
          className="color-values always-show"
          data-mode="hex">
          <div className="color-mode-text">
            <span>HEX
            </span>
          </div>
          <input
            data-tab="true"
            type="text"
            className="always-show"
            pattern="#?[A-Fa-f0-9]*"
            data-comp="hex"
            defaultValue
            tabindex={116} />
        </div>
        <div
          className="color-values always-show"
          data-mode="name">
          <div className="color-mode-text">
            <span>Name
            </span>
          </div>
          <input
            data-tab="false"
            type="text"
            className="always-show"
            data-comp="name"
            defaultValue />
        </div>
      </div>
      <div className="values">
        <div className="color-values" data-mode="cmyk">
          <div className="color-mode-text">
            <span className>CMYK
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="c"
            min={0}
            max={100}
            defaultValue
            tabindex={58} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="m"
            min={0}
            max={100}
            defaultValue
            tabindex={59} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="y"
            min={0}
            max={100}
            defaultValue
            tabindex={60} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="k"
            min={0}
            max={100}
            tabindex={61} />
        </div>
        <div className="color-values" data-mode="rgb">
          <div className="color-mode-text">
            <span className>RGB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="r"
            min={0}
            max={255}
            tabindex={76} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="g"
            min={0}
            max={255}
            tabindex={77} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="b"
            min={0}
            max={255}
            defaultValue
            tabindex={78} />
        </div>
        <div className="color-values" data-mode="lab">
          <div className="color-mode-text">
            <span className>LAB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="l"
            min={0}
            max={100}
            tabindex={91} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="a"
            min={-128}
            max={127}
            tabindex={92} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="b"
            min={-128}
            max={127}
            defaultValue
            tabindex={93} />
        </div>
        <div
          className="color-values color-mode"
          data-mode="hsv">
          <div className="color-mode-text">
            <span className>HSB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="h"
            min={0}
            max={359}
            tabindex={106} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="s"
            min={0}
            max={100}
            tabindex={107} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="v"
            min={0}
            max={100}
            defaultValue
            tabindex={108} />
        </div>
        <div
          className="color-values always-show"
          data-mode="hex">
          <div className="color-mode-text">
            <span>HEX
            </span>
          </div>
          <input
            data-tab="true"
            type="text"
            className="always-show"
            pattern="#?[A-Fa-f0-9]*"
            data-comp="hex"
            defaultValue
            tabindex={117} />
        </div>
        <div
          className="color-values always-show"
          data-mode="name">
          <div className="color-mode-text">
            <span>Name
            </span>
          </div>
          <input
            data-tab="false"
            type="text"
            className="always-show"
            data-comp="name"
            defaultValue />
        </div>
      </div>
      <div className="values">
        <div className="color-values" data-mode="cmyk">
          <div className="color-mode-text">
            <span className>CMYK
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="c"
            min={0}
            max={100}
            defaultValue
            tabindex={62} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="m"
            min={0}
            max={100}
            defaultValue
            tabindex={63} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="y"
            min={0}
            max={100}
            defaultValue
            tabindex={64} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="k"
            min={0}
            max={100}
            tabindex={65} />
        </div>
        <div className="color-values" data-mode="rgb">
          <div className="color-mode-text">
            <span className>RGB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="r"
            min={0}
            max={255}
            tabindex={79} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="g"
            min={0}
            max={255}
            tabindex={80} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="b"
            min={0}
            max={255}
            defaultValue
            tabindex={81} />
        </div>
        <div className="color-values" data-mode="lab">
          <div className="color-mode-text">
            <span className>LAB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="l"
            min={0}
            max={100}
            tabindex={94} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="a"
            min={-128}
            max={127}
            tabindex={95} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="b"
            min={-128}
            max={127}
            defaultValue
            tabindex={96} />
        </div>
        <div
          className="color-values color-mode"
          data-mode="hsv">
          <div className="color-mode-text">
            <span className>HSB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="h"
            min={0}
            max={359}
            tabindex={109} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="s"
            min={0}
            max={100}
            tabindex={110} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="v"
            min={0}
            max={100}
            defaultValue
            tabindex={111} />
        </div>
        <div
          className="color-values always-show"
          data-mode="hex">
          <div className="color-mode-text">
            <span>HEX
            </span>
          </div>
          <input
            data-tab="true"
            type="text"
            className="always-show"
            pattern="#?[A-Fa-f0-9]*"
            data-comp="hex"
            defaultValue
            tabindex={118} />
        </div>
        <div
          className="color-values always-show"
          data-mode="name">
          <div className="color-mode-text">
            <span>Name
            </span>
          </div>
          <input
            data-tab="false"
            type="text"
            className="always-show"
            data-comp="name"
            defaultValue />
        </div>
      </div>
      <div className="values">
        <div className="color-values" data-mode="cmyk">
          <div className="color-mode-text">
            <span className>CMYK
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="c"
            min={0}
            max={100}
            defaultValue
            tabindex={66} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="m"
            min={0}
            max={100}
            defaultValue
            tabindex={67} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="y"
            min={0}
            max={100}
            defaultValue
            tabindex={68} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="k"
            min={0}
            max={100}
            tabindex={69} />
        </div>
        <div className="color-values" data-mode="rgb">
          <div className="color-mode-text">
            <span className>RGB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="r"
            min={0}
            max={255}
            tabindex={82} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="g"
            min={0}
            max={255}
            tabindex={83} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="b"
            min={0}
            max={255}
            defaultValue
            tabindex={84} />
        </div>
        <div className="color-values" data-mode="lab">
          <div className="color-mode-text">
            <span className>LAB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="l"
            min={0}
            max={100}
            tabindex={97} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="a"
            min={-128}
            max={127}
            tabindex={98} />
          <input
            data-tab="true"
            type="number"
            pattern="\-?[0-9]*"
            data-comp="b"
            min={-128}
            max={127}
            defaultValue
            tabindex={99} />
        </div>
        <div
          className="color-values color-mode"
          data-mode="hsv">
          <div className="color-mode-text">
            <span className>HSB
            </span>
          </div>
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="h"
            min={0}
            max={359}
            tabindex={112} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="s"
            min={0}
            max={100}
            tabindex={113} />
          <input
            data-tab="true"
            type="number"
            pattern="[0-9]*"
            data-comp="v"
            min={0}
            max={100}
            defaultValue
            tabindex={114} />
        </div>
        <div
          className="color-values always-show"
          data-mode="hex">
          <div className="color-mode-text">
            <span>HEX
            </span>
          </div>
          <input
            data-tab="true"
            type="text"
            className="always-show"
            pattern="#?[A-Fa-f0-9]*"
            data-comp="hex"
            defaultValue
            tabindex={119} />
        </div>
        <div
          className="color-values always-show"
          data-mode="name">
          <div className="color-mode-text">
            <span>Name
            </span>
          </div>
          <input
            data-tab="false"
            type="text"
            className="always-show"
            data-comp="name"
            defaultValue />
        </div>
      </div>
    </div>
  </div>
</section>
