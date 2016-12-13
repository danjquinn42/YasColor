import { values } from 'lodash';

const _defaultTheme = {
  id: 0,
  default: true,
  title: '',
  user: {},
  color_swatches: [
    { hue: 348, saturation: 62, lightness: 41 },
    { hue: 191, saturation: 96, lightness: 39 },
    { hue: 213, saturation: 14, lightness: 85 },
    { hue: 39, saturation: 85, lightness: 62 },
    { hue: 270, saturation: 6, lightness: 12 }]
};

export const selectTheme = (themes , id) => {
   const theme = themes[id] || _defaultTheme;
   return theme;
};

export const selectAllThemes = ({ themes }) => values(themes.themes);
