Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :themes, only: [:index, :create, :update, :destroy, :show]
  end
end
