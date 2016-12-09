import React from 'react';
import { Link } from 'react-router';


// Object {id: 18, title: "Mint Julips and Orange Blossoms",
//          user: Object, color_swatches: Array[5]}

const ExploreItem = ({ theme, router }) => {

  const swatches = theme.color_swatches.map((color) => {
    const style = { background: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`};
    return (
      <li className="swatch"
        key={color.ord}
        style={ style }
        ></li>
    );
  });

  return (
    <ol className="theme">
      {swatches}
      <h4 className="title">{theme.title}</h4>
    </ol>
  );
};

export default ExploreItem;

// <ol className="swatch">
//   { theme.map((theme))}
// </ol>
