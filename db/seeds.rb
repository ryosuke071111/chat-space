10000.times do |n|
  created_at = Faker::Time.between(2.days.ago, Date.today, :all)
  updated_at = Faker::Time.between(2.days.ago, Date.today, :all)
  user_id = rand(10000) + 1
  group_id = rand(100) + 1

  GroupUser.create(
    created_at:created_at,
    updated_at:updated_at,
    user_id: user_id,
    group_id: group_id
  )
end
