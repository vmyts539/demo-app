class Project < ApplicationRecord
  scope :ordered, -> { order(id: :desc) }

  validates :name, :description, presence: true
  validates :name, length: { minimum: 2, maximum: 40 }
  validates :description, length: { minimum: 20, maximum: 400 }
end
