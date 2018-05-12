json.array! @additional_messages do |message|
  json.id message.id
  json.created_at message.created_at
  json.content message.content
  json.id message.image
  json.user_name message.user.name
end
