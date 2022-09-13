Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # flights 
  get '/flights' => 'flights#index'
  post '/flights' => 'flights#create'
  delete '/flights/:id' => 'flights#destroy'

end
