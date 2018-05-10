FactoryBot.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/2018022700004_1.jpg")
    user
    group
  end
end
