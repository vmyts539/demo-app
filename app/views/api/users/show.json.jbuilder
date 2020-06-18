json.status :success

json.data do
  json.call(@user, :id, :first_name, :last_name, :email, :phone)
end
