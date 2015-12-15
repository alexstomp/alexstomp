require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_model/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module Alexstomp
    class Application < Rails::Application
        config.serve_static_assets = true
        config.assets.paths << Rails.root.join("app", "assets", "fonts")
    end
end
