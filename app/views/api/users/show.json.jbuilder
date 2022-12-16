json.user do
    json.extract! @user, 
    :id, 
    :first_name, 
    :last_name, 
    :birth_date, 
    :phone_number, 
    :email, 
    :created_at

    if @user.photo.attached?
        json.photo_url url_for(@user.photo)
    end
end