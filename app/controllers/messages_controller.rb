class MessagesController < ApplicationController
  def index
    @group = Group.find(1)
    @groups = User.find(1).groups
  end


end
