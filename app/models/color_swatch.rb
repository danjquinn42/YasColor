# == Schema Information
#
# Table name: color_swatches
#
#  id         :integer          not null, primary key
#  hue        :integer          not null
#  saturation :integer          not null
#  lightness  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ord        :integer
#  theme_id   :integer
#

class ColorSwatch < ApplicationRecord
  validates :hue, :saturation, :lightness, :theme presence: true

  belongs_to :theme

end
