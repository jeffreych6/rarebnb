@reviews.each do |review|
    json.set! review.id do
        json.extract! review,
            :id,
            :author_id,
            :listing_id,
            :author_name,
            :rating,
            :cleanliness,
            :accuracy,
            :communication,
            :location,
            :check_in,
            :value,
            :review,
            :review_date

            if review.author.photo.attached?
                json.photo_url url_for(review.author.photo)
            end
    end
end
