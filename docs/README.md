# Assessment 4 - practice

You have **2 hours** for the assessment.

This assessment will focus on a simple CRUD app with
authentication. You will have to model users, links, and comments, along
with session management.

**Windows Users**: Please use one of our workstation machines for the
assessments.

## Schema

Users have a username, password_digest, and session_token.
Links have a title and url; each belongs to a User.
Comments have a body; each belongs to a User and a Link.

## Specs

Run the specs as you solve the assessment. The tests are intended to
be run in this order:

```
bundle exec rspec spec/models/user_spec.rb
bundle exec rspec spec/models/link_spec.rb
bundle exec rspec spec/models/comment_spec.rb
bundle exec rspec spec/controllers/application_controller_spec.rb
bundle exec rspec spec/controllers/users_controller_spec.rb
bundle exec rspec spec/controllers/sessions_controller_spec.rb
bundle exec rspec spec/controllers/links_controller_spec.rb
bundle exec rspec spec/controllers/comments_controller_spec.rb
bundle exec rspec spec/features/auth_spec.rb
bundle exec rspec spec/features/links_spec.rb
bundle exec rspec spec/features/comments_spec.rb
```

* To run one specific spec, add `:line_number` at the end.  For example, `bundle exec rspec spec/models/user_spec.rb:11`

If a failing spec confuses you, look at the spec file to see if you
can discern what it is asking of you. You may also wish to add
`save_and_open_page` to a spec to see what Capybara sees.

At this point, you should know how to go line-by-line and follow the steps that capybara takes.  You should know how to take those same steps in your browser.  For example, if capybara says `visit('/projects')`, you can test the same thing by navigating to `localhost:3000/projects` in Google Chrome (or whatever browser you use).

Note that a common mistake relates to capitalization; Capybara needs
to have the text of links and buttons exactly match what it expects.


As ever, please ask your TAs any questions. If you get stuck or don't
know why something is failing; ask. TAs will let you know whether they
can answer your question, so ask anything. Don't use internet or prior
notes, please.

## Database Config

Every time you run `bundle exec rake db:migrate`, also run `bundle
exec rake db:test:load`. `db:migrate` only updates the development
database; `db:test:load` updates the test DB schema to mirror the
development DB.

You can combine both commands into one:

    bundle exec rake db:migrate db:test:load

## BCrypt Hints

* **Use BCrypt**. You must not store passwords in the DB.
* `BCrypt::Password.create(password)` digests a password and builds a
  `Password` object.
* `BCrypt::Password.new(digest)` builds a `Password` object for the
  digest.
* `BCrypt::Password#is_password?(password)` checks if a password
  matches a digest.

## Submission

* Rename the directory `"#{first_name}-#{last_name}"`.
* ZIP it (you can use OS X's built in zip functionality)
* Use either `.tar.gz` or `.zip`; no boutique formats please :-)

Good luck!
