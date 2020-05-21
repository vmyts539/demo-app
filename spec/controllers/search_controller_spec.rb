require 'rails_helper'

RSpec.describe SearchController, type: :controller do
  render_views

  let!(:first_user) { create(:user, first_name: 'First', last_name: 'User')}
  let!(:second_user) { create(:user, first_name: 'Second', last_name: 'User')}

  before(:each) do
    User.search_index.refresh
    User.reindex

  end

  describe "GET #index" do
    it 'searches' do
      expected_data = {
        email: first_user.email,
        first_name: first_user.first_name,
        id: first_user.id,
        last_name: first_user.last_name,
        phone: first_user.phone
      }.with_indifferent_access

      get :index, as: :json, params: { search: 'F' }
      expect(JSON.parse(response.body)['data']['users'].first).to contain_exactly(*expected_data)
    end
  end

  describe 'GET #autocomplete' do
    it 'should be success' do
      get :autocomplete, as: :json, params: { search: 'F' }
      expect(JSON.parse(response.body).first).to eq(first_user.full_name)
    end
  end
end
