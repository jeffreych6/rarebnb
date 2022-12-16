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

  json.extract! @listing.host,
    :first_name,
    :last_name

    if @listing.host.photo.attached?
      json.photo_url url_for(@listing.host.photo)
    end

  json.reviews @listing.reviews.map do |review|
    json.extract! review,
      :id,
      :author_id,
      :listing_id,
      :rating,
      :cleanliness,
      :accuracy,
      :communication,
      :location,
      :check_in,
      :value,
      :review,
      :review_date

    json.extract! review.author,
      :first_name
      if review.author.photo.attached?
        json.photo_url url_for(review.author.photo)
      end

  end
  
end