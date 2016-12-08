# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
pic_url         | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## themes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    |
created_at  | date      | not null
updated_at  | date      | not null

## color_swatches
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
Hue         | integer   | not null, min 0 max 360
Saturation  | integer   | not null, min 0 max 100
Lightness   | integer   | not null, min 0 max 100
ord         | integer   | not null, min 0 max 4
theme_id    | integer   | not null, foreign key (references themes)

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_id      | integer   | not null, foreign key (references tags), indexed
theme_id    | integer   | not null, foreign key (references themes), indexed

## yases
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
theme_id    | integer   | not null, foreign key (references themes), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
theme_id    | integer   | not null, foreign key (references themes), indexed
user_id     | integer   | not null, foreign key (references users), indexed
created_at  | date      | not null
updated_at  | date      | not null
