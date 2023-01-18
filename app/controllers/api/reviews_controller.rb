class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names

    def index
        @reviews = Review.all.where(listing_id: params[:listing_id])

        render :index
    end

    def create

    end

end
