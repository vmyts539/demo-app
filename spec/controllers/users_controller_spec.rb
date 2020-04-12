require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  render_views

  describe "GET #index" do
    it 'returns http success' do
      get :index
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns http success' do
      get :show
      expect(response).to be_successful
    end
  end

  describe 'GET #new' do
    it 'should be success' do
      get :new
      expect(response).to be_successful
    end
  end
end
