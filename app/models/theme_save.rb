# == Schema Information
#
# Table name: theme_saves
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  theme_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ThemeSave < ApplicationRecord
  validates :user, :theme, presence: true

  belongs_to :user
  belongs_to :theme
end
