@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing,
            :id,
            :title,
            :description,
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
            :wifi
    end
end
