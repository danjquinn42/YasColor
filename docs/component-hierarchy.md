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
  * Tag List Items

###Search

###ExploreThemesContainer
  * Search
  * Theme List Items

##MyThemesContainer
  * Theme List Items

## Routes


|Path                          | Component               |
|------------------------------|-------------------------|
| "/sign-up"                   | "AuthFormContainer"     |
| "/sign-in"                   | "AuthFormContainer"     |
| "/themes                     | "ThemesContainer"       |
| "/themes/saved               | "MyThemesContainer"     |
| "/themes/new                 | "NewThemeContainer"     |
| "/themes/:themeId            | "ShowThemeContainer"    |
| "/themes/:themeId/tags       | "TagContainer"          |
| "/themes/:themeId/tags/edit  | "TagEditorContainer"          |
| "/search                     | "Search"                |
