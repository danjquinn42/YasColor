# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :title, presence: true

  has_many :taggings, inverse_of: :tag

  has_many(
    :themes,
    through: :taggings
  )

end
