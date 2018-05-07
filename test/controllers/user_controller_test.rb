require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get user_new_url
    assert_response :success
  end

  def edit
  end

  def update
    user = current_user.id
    user.name = params[:name]
    user.email = params[:email]
    user.save
  end

end
