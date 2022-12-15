class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.bigint :author_id, null: false
      t.bigint :listing_id, null: false
      t.integer :rating
      t.integer :cleanliness
      t.integer :accuracy
      t.integer :communication
      t.integer :location
      t.integer :check_in
      t.integer :value
      t.text :review

      t.timestamps
    end

    add_index :reviews, :author_id
    add_index :reviews, :listing_id
    add_foreign_key :reviews, :users, column: :author_id, primary_key: :id
    add_foreign_key :reviews, :listings, column: :listing_id, primary_key: :id
  end
end
