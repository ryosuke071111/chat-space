class Addgroupforeignkeytomessages < ActiveRecord::Migration[5.0]
  def change
    add_foreign_key :messages, :groups
  end
end
