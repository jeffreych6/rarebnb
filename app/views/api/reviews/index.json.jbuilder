@reviews.each do |review|
    json.set! review.id do
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
            :review

        json.extract! review.listing,
            :title,
            :property_type,
            :city,
            :state,
            :country,
            :guests,
            :price

        json.extract! review.author,
            :first_name,
            :last_name

            # if reservation.listing.photos.attached?
            #     json.photos_url reservation.listing.photos.map{|photo| url_for(photo)}
            # end
    end
end