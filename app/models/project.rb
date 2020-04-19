class Project < ApplicationRecord
  searchkick word_start: [:name, :description]

  scope :ordered, -> { order(id: :desc) }

  validates :name, :description, presence: true
  validates :name, length: { minimum: 2, maximum: 40 }
  validates :description, length: { minimum: 20, maximum: 400 }

  def search_data
    {
      id: id,
      name: name
    }
  end
end
