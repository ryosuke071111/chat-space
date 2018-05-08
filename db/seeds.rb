10000.times do |n|
  name = Faker::Name.name
  email = Faker::Internet.email
  password = Faker::Code.imei
  created_at = Faker::Time.between(2.days.ago, Date.today, :all)
  updated_at = Faker::Time.between(2.days.ago, Date.today, :all)

  User.create(
    name: name,
    email: email,
    password: password,
    created_at:created_at,
    updated_at:updated_at
  )
end

5000.times do |n|
  name = Faker::Name.name
  email = Faker::Internet.email
  password = Faker::Code.imei
  created_at = Faker::Time.between(2.days.ago, Date.today, :all)
  updated_at = Faker::Time.between(2.days.ago, Date.today, :all)

  User.create(
    name: name,
    email: email,
    password: password,
    created_at:created_at,
    updated_at:updated_at
  )
end
