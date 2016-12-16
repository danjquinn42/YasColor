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

class Theme < ActiveRecord::Base
  validates :user, presence: true

  has_many :color_swatches, inverse_of: :theme
  has_many :taggings, inverse_of: :theme

  has_many(
    :tags,
    through: :taggings
  )

  accepts_nested_attributes_for :tags


  has_many(
   :theme_saves,
   class_name:  "ThemeSave")

  belongs_to :user

  after_commit :create_color_swatches

  def colors=(hslArray)
    if (
      hslArray.is_a?(Array) &&
      hslArray.length == 5 &&
      hslArray.all? { |hsl| hsl.is_a?(Array) && hsl.length == 3 }
      )
      @colors = hslArray
    else
      raise "Theme must be composed of 5 HSL color values"
    end
  end



  def create_color_swatches
    if (@colors)
      @colors.each_with_index do |color, index|
        c = ColorSwatch.new
        c.hue = color[0]
        c.saturation = color[1]
        c.lightness = color[2]
        c.ord = index
        c.theme_id = self.id
        unless c.save
          Themes.delete(self.id)
          raise "unable to save color #{index} with values hue:#{c.hue}, saturation:#{c.saturation}, lightness#{c.lightness}, theme_id:#{c.theme_id}"
        end
      end
    else
    end
  end

end
