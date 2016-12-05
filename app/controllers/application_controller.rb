class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  def login(user)
    user.reset_session_token!
    @current_user = user
    session[:session_token] = @current_user.session_token
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= user.find_by(session_token: sesssion[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
