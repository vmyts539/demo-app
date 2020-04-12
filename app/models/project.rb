class Project < ApplicationRecord
  scope :ordered, -> { order(id: :desc) }

  validates :name, :description, presence: true
  validates :name, length: { minimum: 2, maximum: 22 }
  validates :description, length: { minimum: 20, maximum: 200 }
end
