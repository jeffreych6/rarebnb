class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.bigint :guest_id, null: false
      t.bigint :listing_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :num_guests, null: false, default: 1

      t.timestamps
    end

    add_index :reservations, :guest_id
    add_index :reservations, :listing_id
  end
end
