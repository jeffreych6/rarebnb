@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing,
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

        if listing.photos.attached?
            json.photos_url listing.photos.map{|photo| url_for(photo)}
        end
    end
end

