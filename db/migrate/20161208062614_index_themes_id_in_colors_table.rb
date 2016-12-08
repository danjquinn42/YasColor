class IndexThemesIdInColorsTable < ActiveRecord::Migration[5.0]
  def change
    add_index :color_swatches, :theme_id
  end
end
