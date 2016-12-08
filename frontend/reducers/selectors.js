export const selectTheme = ({ themes }, id) => {
   const theme = themes[id] || {};
   return theme;
};

export const asArray = ({ themes }) => Object.keys(themes).map(key => themes[key]);
