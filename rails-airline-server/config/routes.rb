Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'airplanes#index'
  
  # airplanes
  resources :airplanes  #shortcut key to routes
  resources :user       #shortcut key to routes

  # flights 
  get '/flights' => 'flights#index'
  post '/flights' => 'flights#create'
  delete '/flights/:id' => 'flights#destroy'

  #reservations
  get '/reservations' => 'reservations#index'
  post '/reservations' => 'reservations#create'
  delete '/reservations/:id' => 'reservations#destroy'

end
