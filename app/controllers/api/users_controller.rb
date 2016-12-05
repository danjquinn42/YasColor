class Api::UsersController < ApplicationController

  def show
  end

  def create
    @user = User.new(user_params)

    if @user.save!
      login(@user)
      render( json: {} )
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
