json.extract! user, :id, :name, :email
json.saved_themes user.saved_themes.each do |theme|
  json.partial! 'api/themes/theme.json.jbuilder', theme: theme
end
