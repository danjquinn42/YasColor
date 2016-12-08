class Api::ThemesController < ApplicationController

  def index
    @themes = Theme.all
  end

  def show
    @theme = Theme.find(params[:id])
  end

  def create
    @theme = Theme.new(themes_params)

    if @theme.save!
      render :show
    else
      render json: @theme.errors.full_messages, status 422
    end
  end

  def update
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

  private

  def themes_params
    params.require(:user).permit(:user, :title, :colors)
  end
end
