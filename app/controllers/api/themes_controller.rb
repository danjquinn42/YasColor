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
    params.require(:theme).permit(:user, :title, :color_swatches, :colors)
  end
end
