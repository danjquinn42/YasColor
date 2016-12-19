# Yas Color!

[Yas Color! live](https://yascolor.herokuapp.com/?#/)

Yas Color is a online tool for designers and artists inspired by [Adobe Color](https://color.adobe.com/ "Abobe Color CC"). The backend is built with Ruby on Rails and a PostgreSQL database. The front end is written in React.js with Redux.


## Yas Features and Implementation!

## Saving and Displaying Colors
Colors are saved in HSL format in the database. The color_swatches table has separate columns for order hue, saturation, and lightness. Colors can only be saved through the themes model. When creating a new theme an array of five color objects is required by the API.

When the theme object is passed to the front end the colors are interpolated as in-line CSS styles on div tags.

The themes table has a user_id column to keep track of which user created the theme originally. A separate theme_saves table is used to keep track of which themes the user has added to their library. This approach may differ from the Adobe site I was emulating. On the adobe site when a user saves a theme that theme is copied and the user_id field is updated appropriately. I noticed this approach results in many duplicated themes on the explore view. In my implementation a new theme is only created when the user has saved a theme from the create page.

## Creating Colors and Themes
By saving the colors in HSL format on the backend the process of creating and editing colors is simplified. HSL uses a cylindrical color space so the hue and saturation values can be directly interpreted as polar coordinates on a color wheel. The user may edit colors by dragging markers on the wheel or by adjusting the color values with sliders.
The UI is entirely composed of DOM elements and vanilla Javascript. By avoiding dependancies on third party react of JS libraries the webpage is able to maximize cross-browser compatibility.

### Tags
The tags table has only a title column. A separate join table carrying a tag_id and a theme_id keeps track theme tags. An array of tags is passed with each theme. Because the theme object are fairly small I am able to pass all theme object to the front end when the explore page is loaded. Searching for theme by tag therefor requires no additional request to the backend. Rather, the list is filtered by users search query and searches are performed in real-time.

## Yas Coming Features!

### Yas button
In addition to saving and editing themes the user will be able to 'Yas' a theme. This is similar to the Facebook 'Like' button.

### Color Rules
Currently users can lock color relationships and move all markers on the wheel simultaneously. I plan to add additional color rules such as triadic and complementary so users can easily access basic color theory principals.
