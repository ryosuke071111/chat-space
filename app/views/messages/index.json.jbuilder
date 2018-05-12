json.array! @messages do |message|
  json.id message.id
  json.created_at message.created_at
  json.id message.content
  json.id message.image
end
