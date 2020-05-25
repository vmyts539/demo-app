FactoryBot.define do
  factory :project do
    name { Faker::Book.genre }
    description { Faker::Book.title * 5 }
  end
end
