Rails.application.routes.draw do
  root to: 'home#index'
  get '/search', to: 'search#index'
  get '/autocomplete',  to: 'search#autocomplete'
end
