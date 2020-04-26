Rails.application.routes.draw do
  root to: 'search#index'
  get '/search', to: 'search#index'
  get '/autocomplete',  to: 'search#autocomplete'

  get '/(*all)', to: 'search#index'
end
