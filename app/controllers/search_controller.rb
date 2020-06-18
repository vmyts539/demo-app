class SearchController < ApplicationController
  def index
    @users = User.search params[:search],
      fields: [:first_name, :last_name, :full_name],
      match: :word_start,
             misspellings: { edit_distance: 0 }

    sleep(2)

    respond_to do |format|
      format.html
      format.json
   end
  end

  def autocomplete
    render json: User.search(params[:search], {
      fields: [:first_name, :last_name, :full_name],
      match: :word_start,
      misspellings: { edit_distance: 0 },
      limit: 7
    }).map(&:full_name)
  end
end

# add loader for any operation
# why combine
# multimodel elastic
# add global error page(e.g. 404)
