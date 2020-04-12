class UsersController < ApplicationController
  def index
    @users = resource
  end

  def show
    @user = resource
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.save
  end

  def destroy
    @user = resource
    @user.destroy
  end

  private

  def collection
    User.ordered
  end

  def resource
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone)
  end
end
