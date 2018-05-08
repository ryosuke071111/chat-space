class MessagesController < ApplicationController
  def index
    @groups = current_user.groups
    @group = Group.find(1)
    @messages =  Message.where(group_id: params[:group_id]).order("created_at ASC")

  end


end
