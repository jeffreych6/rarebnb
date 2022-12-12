# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  guest_id   :bigint           not null
#  listing_id :bigint           not null
#  start_date :date             not null
#  end_date   :date             not null
#  num_guests :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reservation < ApplicationRecord
    validates :guest_id, :listing_id, :start_date, :end_date, presence: true
    validate :reservation_period

    belongs_to :guest,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

    def reservation_period
        return unless end_date.present? && start_date.present? && end_date < start_date

        errors.add(:end_date, "End date cannot be earlier than start date")
    end
end
