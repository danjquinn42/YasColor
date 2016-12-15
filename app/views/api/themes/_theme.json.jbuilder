json.extract! theme, :id, :title, :user, :color_swatches, :created_at
json.tags theme.tags.each do |tag|
  json.extract! tag, :title, :id
end
