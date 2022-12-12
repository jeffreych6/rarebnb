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
    :air_con,
    :pets

    if @listing.photos.attached?
      json.photos_url @listing.photos.map{|photo| url_for(photo)}
    end

  json.extract! @host,
    :first_name,
    :last_name
end