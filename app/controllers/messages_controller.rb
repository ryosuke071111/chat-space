class MessagesController < ApplicationController
  def index
    @group = User.find(1)
  end
end
