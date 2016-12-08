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

require 'test_helper'

class ColorSwatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
