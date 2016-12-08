class CreateThemes < ActiveRecord::Migration[5.0]
  def change
    create_table :themes do |t|
      t.integer :user_id, null: false
      t.string :title
      t.integer :color_swatch_id, null: false, array: true, default: []
      t.timestamps
    end
    add_index :themes, :user_id
  end
end
