class GroupController < ApplicationController

  def new
  end

  def create
    Group.create(group_params)
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    group = Group.find(params[:id])
    if group_user.user_id == current.user.id
      group.update(group_params
    end
  end

private
 def group_params
  params.require(:group).permit(:name, :users)
 end
end


end
