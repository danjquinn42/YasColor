#Components

## Component Hierarchy

###AuthFormContainer
  * AuthForm

###NewThemeContainer
  * newTheme

###ThemeViewContainer
  * Theme
  * Actions Panel
    * tags

###Tags
  * Tag

###Search

###ExploreThemesContainer
  * Search
  * Theme List Items


## Routes


|Path                     | Component               |
|-------------------------|-------------------------|
| "/sign-up"              | "AuthFormContainer"     |
| "/sign-in"              | "AuthFormContainer"     |
| "/themes                | "ThemesIndexContainer"  |
| "/themes/new            | "NewThemeContainer"     |
| "/themes/:themeId       | "ShowThemeContainer"    |
| "/themes/:themeId/tags  | "TagContainer"          |
| "/search                | "Search"                |
