class CreateColorSwatches < ActiveRecord::Migration[5.0]
  def change
    create_table :color_swatches do |t|
      t.integer :hue, null: false
      t.integer :saturation, null: false
      t.integer :lightness, null: false

      t.timestamps
    end
  end
end
