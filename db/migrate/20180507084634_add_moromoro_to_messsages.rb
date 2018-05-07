class AddMoromoroToMesssages < ActiveRecord::Migration[5.0]
  def change
     add_column :messages, :content, :text, null:false
     add_column :messages, :image, :string
     add_column :messages, :user_id, :integer, null:false, index: true, foreign_key: true
     add_column :messages, :group_id, :integer, null:false, index: true, foreign_key: true

  end
end
