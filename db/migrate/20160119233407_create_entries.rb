class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.string :context
      t.text :description
      t.string :button_link
      t.string :button_text

      t.timestamps
    end
  end
end
