# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  host_id     :bigint           not null
#  title       :string           not null
#  description :text             not null
#  price       :integer
#  city        :string
#  state       :string
#  country     :string
#  lat         :float
#  lng         :float
#  zip_code    :integer
#  guests      :integer
#  bedrooms    :integer
#  beds        :integer
#  baths       :integer
#  kitchen     :boolean          default(TRUE)
#  parking     :boolean          default(TRUE)
#  wifi        :boolean          default(TRUE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Listing < ApplicationRecord
    validates :host_id, :title, :description, presence: true

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    # using listings > title for now to test AWS
    # has_one_attached :photo
    has_many_attached :photos

end
