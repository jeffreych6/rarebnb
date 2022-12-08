class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.bigint :host_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :price
      t.string :city
      t.string :state
      t.string :country
      t.float :lat
      t.float :lng
      t.integer :zip_code
      t.integer :guests
      t.integer :bedrooms
      t.integer :beds
      t.integer :baths
      t.boolean :kitchen, default: true
      t.boolean :parking, default: true
      t.boolean :wifi, default: true

      t.timestamps
    end

    add_foreign_key :listings, :users, column: :host_id, primary_key: :id
    add_index :listings, :host_id
    add_index :listings, :city
    add_index :listings, :country
  end
end
