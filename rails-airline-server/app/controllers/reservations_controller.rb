class ReservationsController < ApplicationController

    skip_before_action :verify_authenticity_token, raise: false

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

    def bookInfo
        flightNumb = params[:flightNumb]
        flight = Flight.where(flight_number: flightNumb).first
        airplane = flight.airplane
        row_total = airplane.seating_row
        col_total = airplane.seating_column
        reservations_all = Reservation.where(flight_id:flight.id).reverse
        user = User.last
        bookedArr = reservations_all.pluck(:row).zip(reservations_all.pluck(:col))

        render json: {
            flight:flight,
            airplane:airplane,
            row_total:row_total,
            col_total:col_total,
            reservations_all:reservations_all,
            bookedArr:bookedArr,
            user:user
        }

    end

    def makeBooking
        puts "==============="
        puts reservation_params
        puts "==============="

        Reservation.create! reservation_params
        redirect_back(fallback_location:"/reservations")

    end

    private
    def reservation_params
        params.permit(:user_id, :flight_id, :row, :col)
    end

   


end
