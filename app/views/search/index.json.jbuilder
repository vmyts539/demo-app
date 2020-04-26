json.status :success

json.data do
  json.users @users.each do |user|
    json.partial! 'search/user', user: user
  end
end
