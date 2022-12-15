# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  phone_number    :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birth_date      :date             not null
#
class User < ApplicationRecord
    has_secure_password

    validates :first_name, presence: { message: "First name is required." }
    validates :last_name, presence: { message: "Last name is required." }
    validates :birth_date, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :email, length: { in: 3..30, message: "Email is too short (minimum is 3 characters)" }, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Enter a valid email." }
    validates :password, length: { in: 8..255, message: "Your password must be at least 8 characters. Please try again." }, allow_nil: true
    validate :age_cannot_be_minor

    before_validation :ensure_session_token

    has_many :listings,
      primary_key: :id,
      foreign_key: :host_id,
      class_name: :Listing,
      inverse_of: :host,
      dependent: :destroy

    has_many :reservations,
      primary_key: :id,
      foreign_key: :guest_id,
      class_name: :Reservation,
      inverse_of: :guest,
      dependent: :destroy

    has_many :reviews,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: :Review,
      inverse_of: :author,
      dependent: :destroy

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
  
        if user&.authenticate(password)
          return user
        else
          nil
        end
      end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    def age
      age = (Date.today - self.birth_date)/365
      age.to_i
    end

    def age_cannot_be_minor
      return unless birth_date.present? && age < 18
  
      errors.add(:birth_date, "You must be 18 or older to use RareBnB. Other people won’t see your birthday.")
    end

    private

    def generate_unique_session_token
      while true
        token = SecureRandom::urlsafe_base64
        return token unless User.exists?(session_token: token)
      end
    end

end
