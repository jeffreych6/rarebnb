Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :listings, only: [:index, :show, :create] do
      resources :reviews, only: [:index, :create]
    end
    resources :reservations
    resource :session, only: [:create, :show, :destroy]
  end

  # Below all routes

  get '*path', to: "static_pages#frontend_index"

end
