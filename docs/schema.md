# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## themes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
colors      | array[5]  | not null, each element is a 6 digit hexadecimal string
created_at  | date      | not null
updated_at  | date      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
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
