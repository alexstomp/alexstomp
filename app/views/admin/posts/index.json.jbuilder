json.array!(@posts) do |post|
  json.extract! post, :id, :id, :title, :excerpt, :body
  json.url post_url(post, format: :json)
end
