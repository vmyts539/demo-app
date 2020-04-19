class SearchController < ApplicationController
  def index
    @users = User.search params[:search], fields: [:first_name, :last_name], match: :word_start, misspellings: { edit_distance: 0 }
    @projects = Project.search params[:search], fields: ["name^10", "description"], match: :word_start, misspellings: { edit_distance: 0 }
  end

  def autocomplete
    # render json:
    #   Movie.search(params[:query], {
    #   fields: ["title^5", "director"],
    #   match: :word_start,
    #   limit: 10,
    #   load: false,
    #   misspellings: {below: 5}
    # }).map(&:title)
  end
end
