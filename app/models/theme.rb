# == Schema Information
#
# Table name: themes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Theme < ApplicationRecord

  has_many :color_swatches
end
