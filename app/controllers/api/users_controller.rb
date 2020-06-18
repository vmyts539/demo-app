class Api::UsersController < ApplicationController
  def show
    @user = resource
  end

  private

  def resource
    User.find(params[:id])
  end
end
