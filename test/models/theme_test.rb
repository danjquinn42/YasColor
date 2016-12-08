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

require 'test_helper'

class ThemeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
