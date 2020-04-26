class SearchController < ApplicationController
  def index
    @users = User.search params[:search], fields: [:first_name, :last_name], match: :word_start, misspellings: { edit_distance: 0 }
    @projects = Project.search params[:search], fields: ["name^10", "description"], match: :word_start, misspellings: { edit_distance: 0 }

    respond_to do |format|
      format.html
      format.json
   end
  end
end

# 1. Move search to react
# 2. Add  panel
# 3. Highlighting
