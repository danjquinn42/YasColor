class RemovePhantomColumnFromTaggings < ActiveRecord::Migration[5.0]
  def change
    remove_column :taggings, :integer
    remove_column :taggings, :theme_id

    add_column :taggings, :theme_id, :integer
    add_index :taggings, :theme_id
  end
end
