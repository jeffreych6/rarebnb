class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['authorId'] + ['listingId'] + ['checkIn']

    def index
        @reviews = Review.all

        render :index
    end
end
