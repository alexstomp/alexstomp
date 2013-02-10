Alexstomp::Application.routes.draw do
  
  root :to => 'application#home'

  match 'blog' => 'application#blog', :as => :blog
  match 'chalkthemup' => 'portfolio#chalkthemup', :as => :chalkthemup
  match 'bacc' => 'portfolio#bacc', :as => :bacc
  match 'ete_print' => 'portfolio#ete_print', :as => :ete_print
  match 'ete_web' => 'portfolio#ete_web', :as => :ete_web

end