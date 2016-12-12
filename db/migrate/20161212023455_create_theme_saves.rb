class CreateThemeSaves < ActiveRecord::Migration[5.0]
  def change
    create_table :theme_saves do |t|
      t.integer :user_id, null: false
      t.integer :theme_id, null: false

      t.timestamps
    end
    add_index :theme_saves, :user_id
    add_index :theme_saves, :theme_id
  end
end
