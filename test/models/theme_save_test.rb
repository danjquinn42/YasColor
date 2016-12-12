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

require 'test_helper'

class ThemeSaveTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
