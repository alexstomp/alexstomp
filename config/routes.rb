Alexstomp::Application.routes.draw do
  
  root :to => 'application#home'

  match 'resume' => 'application#resume', :as => :resume
  match 'blog' => 'application#blog', :as => :blog
  match 'chalkthemup' => 'portfolio#chalkthemup', :as => :chalkthemup
  match 'bacc' => 'portfolio#bacc', :as => :bacc
  match 'aquamu' => 'portfolio#aquamu', :as => :aquamu
  match 'trinity' => 'portfolio#trinity', :as => :trinity
  match 'ete' => 'portfolio#ete', :as => :ete

end