@themes.each do |theme|
  json.set! theme.id do
    json.partial! 'theme', theme: theme
  end
end
