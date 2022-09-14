class ReservationsController < ApplicationController

    def index
        @reservations = Reservation.all.reverse
        @users = User.all
        @flights = Flight.all
    end

    def create
       
        Reservation.create reservation_params
        redirect_back(fallback_location:"/reservations")
    end

    def destroy
        Reservation.destroy params[:id]
        redirect_back(fallback_location:"/reservations")
     end

    private
    def reservation_params
        params.permit(:user_id, :flight_id, :row, :col)
    end


end
