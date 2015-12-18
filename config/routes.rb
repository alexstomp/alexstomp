Rails.application.routes.draw do

    root :to => 'application#home'

    get '/portfolio' => 'application#portfolio'
    get '/blog' => 'application#blog'
end
