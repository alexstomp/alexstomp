class ApplicationController < ActionController::Base
	before_action :authenticate_user!, :only => ['admin']

	# about
	def home
	end

	# portfolio
	def portfolio
	end

	# blog
	def blog
	end

	# admin dash
	def admin
	end

	# admin blog
	def admin_blog
	end

    protect_from_forgery
end
