class User < ApplicationRecord
  searchkick word_start: [:first_name, :last_name, :full_name]

  scope :ordered, -> { order(id: :desc) }

  validates :first_name,
            :last_name,
            :email,
            presence: true,
            length: { minimum: 2, maximum: 40 }

  def full_name
    "#{first_name} #{last_name}"
  end

  def search_data
    {
      id: id,
      full_name: full_name,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone
    }
  end
end
