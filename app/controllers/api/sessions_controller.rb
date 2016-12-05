class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
      )

    if @user
      @user.login(@user)
        render :show
    else
      render(
        json: ["Email and password don't match."],
        status: 422
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render {}
    else
      render(
        json: ['You cannot sign out before signing in.'],
        status: 404
      )
    end
  end
end
