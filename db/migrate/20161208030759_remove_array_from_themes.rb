class RemoveArrayFromThemes < ActiveRecord::Migration[5.0]
  def change
    remove_column :themes, :color_swatch_id

    add_column :color_swatches, :ord, :integer
    add_column :color_swatches, :theme_id, :integer
  end
end
