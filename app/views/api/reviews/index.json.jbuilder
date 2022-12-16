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
            :review,
            :review_date

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

            # if review.author.photo.attached?
            #     json.photo_url url_for(review.photo)
            # end
    end
end