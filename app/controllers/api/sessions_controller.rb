class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
      )

    if @user
      login(@user)
        render "api/users/show"
    else
      render(
        json: ["Email and password do not match"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["You can't sign out before signing in! That's crazy. You're crazy."],
        status: 404
      )
    end
  end
end
