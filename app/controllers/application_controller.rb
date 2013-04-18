class ApplicationController < ActionController::Base

  layout "page", :except => [:home]

	def home
	end

	def blog
	end

	def resume
	end

  protect_from_forgery
end
