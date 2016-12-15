import React from 'react';
import { Link } from 'react-router';


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

  const displayTitle = () => {
    if (theme.title.length > 20) {
      return(`${theme.title.slice(0, 19)}...`);
    } else {
      return(theme.title);
    }
  };

  return (
    <div className="cooltip">
      <section className="item group">
          <ol className="theme">
            {swatches}
          </ol>
        <Link to={`/theme/${theme.id}`} className="title">{displayTitle()}</Link>
      </section>
  </div>
  );
};

export default ExploreItem;
