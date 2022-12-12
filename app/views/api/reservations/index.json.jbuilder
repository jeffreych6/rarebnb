@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation,
            :id,
            :guest_id,
            :listing_id,
            :start_date,
            :end_date,
            :num_guests

        json.extract! reservation.listing,
            :title,
            :property_type,
            :city,
            :state,
            :country

        json.extract! reservation.listing.host,
            :first_name,
            :last_name

            if reservation.listing.photos.attached?
                json.photos_url reservation.listing.photos.map{|photo| url_for(photo)}
            end
    end
end