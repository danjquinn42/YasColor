class CreateThemeSaves < ActiveRecord::Migration[5.0]
  def change
    create_table :theme_saves do |t|
      t.integer :user_id
      t.integer :theme_id

      t.timestamps
    end
  end
end
