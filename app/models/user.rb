# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  email           :string           not null
#  pic_url         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :name, :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :themes

  has_many(
   :theme_saves,
   class_name: "ThemeSave"
   )

  has_many(
    :saved_themes,
    through: :theme_saves,
    source: :theme
  )

   attr_reader :password

   after_initialize :ensure_session_token

   def all_my_themes
    Theme.find_by_sql(
      "SELECT
        *
      FROM
        themes
      JOIN
        theme_saves ON theme_saves.theme_id = themes.id
      WHERE
        theme_saves.user_id = #{self.id} OR themes.user_id = #{self.id}")
   end

   def password=(password)
     @password = password
     self.password_digest = BCrypt::Password.create(@password)
   end

   def is_password?(password)
     BCrypt::Password.new(self.password_digest).is_password?(password)
   end

   def self.find_by_credentials(email, password)
     user = User.find_by(email: email)
     if user && user.is_password?(password)
       return user
     end
     nil
   end

   def reset_session_token!
     self.session_token = SecureRandom::urlsafe_base64(16)
     self.save!
     self.session_token
   end

   private

   def ensure_session_token
     self.session_token ||= SecureRandom::urlsafe_base64(16)
   end

 end
