json.user do
    json.extract! @user, :id, :first_name, :last_name, :phone_number, :email, :created_at
end