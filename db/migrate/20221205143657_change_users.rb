class ChangeUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :phone_number, true
    add_column :users, :birth_date, :date, null: false
  end
end
