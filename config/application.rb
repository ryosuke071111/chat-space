require_relative 'boot'

require 'rails/all'
require 'carrierwave'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
module AwesomeEvents
  class Application < Rails::Application
    config.autoload_paths += Dir[Rails.root.join('app', 'uploaders')]
    # 以下省略
     end
end

module ChatSpace
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

module PairsLike
  class Application < Rails::Application
    # ここから下を追加
    config.generators do |g|
      g.javascripts false
      g.helper false
      g.test_framework false
      config.i18n.default_locale = :ja
    end
  end
end
