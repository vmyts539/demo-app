puts "-> Seeding Users..."
FactoryBot.create_list(:user, 30)
puts "Done!"

puts "-> Seeding Projects..."
FactoryBot.create_list(:project, 60)
puts "Done!"
