Rails.application.routes.draw do
    root :to => 'application#home'
    devise_for :users

    get '/portfolio' => 'application#portfolio'
    get '/blog' => 'application#blog'

    namespace :admin do
        resources :entries, :posts

        root :to => 'entries#index'
    end
end
