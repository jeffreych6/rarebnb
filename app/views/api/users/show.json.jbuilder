json.user do
    json.extract! @user, :id, :first_name, :last_name, :birth_date, :phone_number, :email, :created_at
end