FactoryBot.define do
  factory :project do
    name { Faker::Book.title }
    description { Faker::Book.title * 10 }
  end
end
