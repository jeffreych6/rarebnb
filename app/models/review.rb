# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  author_id     :bigint           not null
#  listing_id    :bigint           not null
#  rating        :integer
#  cleanliness   :integer
#  accuracy      :integer
#  communication :integer
#  location      :integer
#  check_in      :integer
#  value         :integer
#  review        :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  review_date   :date
#
class Review < ApplicationRecord
    validates :author_id, :listing_id, :review, presence: true
    validates :review, presence: { message: "Comment cannot be blank." }
    validates :rating, :cleanliness, :accuracy, :communication, :location, :check_in, :value, numericality: { in: 1..5, message: "Rating cannot be blank." }

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing
end
