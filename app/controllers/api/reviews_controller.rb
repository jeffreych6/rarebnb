class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['authorId', 'listingId', 'authorName', 'checkIn', 'reviewDate']

    def index
        @reviews = Review.all.where(listing_id: params[:listing_id])

        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            @listing = Listing.find_by(id: @review.listing_id)
            @listing.rating = ((@listing.rating * @listing.num_ratings) + @review.rating) / (@listing.num_ratings + 1)
            @listing.num_ratings += 1
            @listing.save
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.require(:review).permit(
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
        )
    end
end
