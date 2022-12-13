class Api::ReservationsController < ApplicationController
    wrap_parameters include: Reservation.attribute_names + ['guestId'] + ['listingId'] + ['startDate'] + ['endDate'] + ['numGuests']

    before_action :require_logged_in

    def index
        if current_user
            guest_id = current_user.id
        end
        
        @reservations = Reservation.all.where(guest_id: guest_id)

        render :index
    end

    def create
        @reservation = Reservation.new(reservation_params)

        if !(@reservation.save)
            render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation.update
            render :index
        else
            render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation && @reservation.delete
            render :index
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(:guest_id, :listing_id, :start_date, :end_date, :num_guests)
    end


end
