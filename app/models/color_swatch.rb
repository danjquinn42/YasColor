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

class ColorSwatch < ActiveRecord::Base
  validates :hue, :saturation, :lightness, :theme, :ord, presence: true

  belongs_to :theme, inverse_of: :color_swatches

  # after_initialize :verify_values

  private

  # def verify_values
  #   unless (
  #     self.hue.between?(0, 360) &&
  #     self.saturation.between?(0, 100) &&
  #     self.lightness.between?(0, 100)
  #     )
  #     raise "Invalid values for HSL Color hue:#{self.hue}, saturation:#{saturation}, lightness:#{lightness}"
  #   end
  # end

end
