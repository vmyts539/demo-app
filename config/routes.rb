Rails.application.routes.draw do
  root to: 'search#index'
  get '/search', to: 'search#index'
  get '/autocomplete',  to: 'search#autocomplete'

  namespace :api do
    resources :users, only: [:show], defaults: { format: 'json' }
  end

  get '/(*all)', to: 'search#index'
end
