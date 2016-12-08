import { values } from 'lodash';

export const selectTheme = ({ themes }, id) => {
   const theme = themes[id] || {};
   return theme;
};

export const selectAllThemes = ({ themes }) => values(themes);
