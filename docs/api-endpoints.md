# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Themes

- `GET /api/themes`
  - Themes index/explore
  - accepts `tag_name` query param to list themes by tag
- `POST /api/themes`
- `GET /api/themes/:id`
- `PATCH /api/themes/:id`
- `DELETE /api/themes/:id`

### Tags

- A theme's tags will be included in the theme show template
- `GET /api/tags`
- `POST /api/themes/:theme_id/tags`: add tag to theme by name
  - if theme doesn't already exist, it will be created
- `DELETE /api/themes/:theme_id/tags/:tag_name`: remove tag from theme by
  name

### Comments

- `GET /api/themes/:theme_id/comments`
- `POST /api/themes/:theme_id/comments`: add comment to theme
- `DELETE /api/themes/:theme_id/comments/:comment_id`: remove tag from theme by
  id
