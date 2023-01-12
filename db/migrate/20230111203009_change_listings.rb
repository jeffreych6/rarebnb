class ChangeListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :rating, :decimal, precision: 3, scale: 2, default: 0
    add_column :listings, :num_ratings, :integer, default: 0
    add_column :listings, :dryer, :boolean, default: true
    add_column :listings, :tv, :boolean, default: true
    add_column :listings, :workspace, :boolean, default: true
    add_column :listings, :self_check_in, :boolean, default: true

    add_column :reviews, :author_name, :string
  end
end
