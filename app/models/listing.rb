# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  host_id       :bigint           not null
#  title         :string           not null
#  description   :text             not null
#  price         :integer
#  city          :string
#  state         :string
#  country       :string
#  lat           :float
#  lng           :float
#  zip_code      :integer
#  guests        :integer
#  bedrooms      :integer
#  beds          :integer
#  baths         :integer
#  kitchen       :boolean          default(TRUE)
#  parking       :boolean          default(TRUE)
#  wifi          :boolean          default(TRUE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  washer        :boolean          default(TRUE)
#  air_con       :boolean          default(TRUE)
#  pets          :boolean          default(TRUE)
#  property_type :string
#
class Listing < ApplicationRecord
    validates :host_id, :title, :description, presence: true

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many :reservations,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Reservation,
        dependent: :destroy

    has_many :reviews,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Review,
        dependent: :destroy

    has_many_attached :photos

end
