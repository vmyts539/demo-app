class User < ApplicationRecord
  scope :ordered, -> { order(id: :desc) }

  validates :first_name, :last_name, :email, presence: true, length: { minimum: 2, maximum: 40 }

  def full_name
    "#{first_name} #{last_name}"
  end
end
