class ProjectsController < ApplicationController
  def index
    @projects = collection
  end

  def show
    @project = resource
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
  end

  def destroy
    @project = resource
    @project.destroy
  end

  private

  def collection
    Project.ordered
  end

  def resource
    Project.find(params[:id])
  end

  def project_params
  params.require(:project).permit(:name, :description)
  end
end
