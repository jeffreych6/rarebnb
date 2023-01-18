class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create]
    wrap_parameters include: Listing.attribute_names + ['hostId', 'propertyType', 'zipCode', 'airCon', 'selfCheckIn']

    def index
        @listings = Listing.all

        render :index
    end

    # def create
    #     @listing = Listing.new(listing_params)

    #     if @listing.save
    #         render :show
    #     else
    #         render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    def show
        @listing = Listing.find_by(id: params[:id])
        
        render :show
    end

    private

    def listing_params
        params.require(:listing).permit(
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
            :pets,
            :dryer,
            :tv,
            :workspace,
            :self_check_in
        )
    end
end