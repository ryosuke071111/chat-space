Rails.application.routes.draw do
  root 'messages#index'
  devise_for :users
  get 'user/new'

  get 'group/new'


end
