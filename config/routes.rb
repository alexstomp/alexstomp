Alexstomp::Application.routes.draw do
  
  root :to => 'application#home'

  match 'blog' => 'application#blog', :as => :blog

end