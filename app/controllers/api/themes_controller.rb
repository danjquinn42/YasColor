class Api::ThemesController < ApplicationController

  def index
    @themes = Theme.all
  end

  def show
    @theme = Theme.find(params[:id])
  end

  def create
    @theme = current_user.themes.new(themes_params)
    color_swatches = params[:theme][:color_swatches]
    if @theme.save
      5.times do |swatch|
        hue = color_swatches["#{swatch}"][:hue]
        saturation = color_swatches["#{swatch}"][:saturation]
        lightness = color_swatches["#{swatch}"][:lightness]
        ord = color_swatches["#{swatch}"][:ord]
        color = @theme.color_swatches.new(hue: hue, saturation: saturation, lightness: lightness, ord: ord)
        color.save
        current_user.saved_themes << @theme
      end
      render :show
    else
      render json: @theme.errors.full_messages, status: 422
    end
  end

  def update
    @theme = Theme.find(params[:id])
    # debugger
    tags = params[:theme][:tags]
    if tags
      tags.each_with_index do |tag, index|
        unless ( tag[1][:id] )
          new_tag = Tag.new
          new_tag.title = tag[1][:title]
          new_tag.save
          new_tag.themes << @theme
          @theme.tags << new_tag
        end
      end
    end
    if @theme.update(themes_params)
      render :show
    else
      render json: @theme.errors.full_messages, status: 422
    end
  end

  def destroy
    theme = Theme.find(params[:id])
    if theme.destory
      flash[:notices] = "Theme deleted"
    else
      render(
        json: ["Unable to delete theme."],
        status: 422
      )
    end
  end

  private

  def themes_params
    params.require(:theme).permit(:user, :title, :color_swatches, :colors, tags: [])
  end
end
