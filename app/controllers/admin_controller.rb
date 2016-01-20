class AdminController < ApplicationController
  before_action :require_admin
  layout "admin"

  def require_admin
    unless authenticate_user!
      redirect_to root_path
    end
  end
end
