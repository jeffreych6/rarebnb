json.listing do
  json.extract! @listing,
    :id,
    :host_id,
    :title,
    :description,
    :property_type,
    :price,
    :city,
    :state,
    :country,
    :lat,
    :lng,
    :zip_code,
    :guests,
    :bedrooms,
    :beds,
    :baths,
    :kitchen,
    :parking,
    :wifi,
    :washer,
    :dryer,
    :air_con,
    :pets,
    :tv,
    :workspace,
    :self_check_in,
    :rating,
    :num_ratings

    if @listing.photos.attached?
      json.photos_url @listing.photos.map{|photo| url_for(photo)}
    end

  json.extract! @listing.host,
    :first_name,
    :last_name

    if @listing.host.photo.attached?
      json.photo_url url_for(@listing.host.photo)
    end
  
end