export const selectTheme = ({ themes, reviews }, id) => {
   const theme = themes[id] || {};
   theme.reviews = [];
   for (let id in reviews) {
     theme.reviews.push(reviews[id]);
   }
   return theme;
};

export const asArray = ({ themes }) => Object.keys(themes).map(key => themes[key]);
