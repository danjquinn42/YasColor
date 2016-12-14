class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :tag_id
      t.string :theme_id
      t.string :integer

      t.timestamps
    end
    add_index :taggings, :tag_id
    add_index :taggings, :theme_id
  end
end
