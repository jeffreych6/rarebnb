class ChangeListing < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :washer, :boolean, default: true
    add_column :listings, :air_con, :boolean, default: true
    add_column :listings, :pets, :boolean, default: true
    add_column :listings, :property_type, :string
  end
end
