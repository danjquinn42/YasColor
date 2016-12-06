class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :emails
      t.string :pic_url
      t.string :password_digest

      t.timestamps
    end
  end
end
