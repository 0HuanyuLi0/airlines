class FlightsController < ApplicationController

    def index
        @flights = Flight.all.reverse
        @airplanes = Airplane.all
    end

    def create
        Flight.create flights_params
        redirect_back(fallback_location:"/flights")
    end

    def destroy
       Flight.destroy params[:id]
       redirect_back(fallback_location:"/flights")
    end

    def findAlpha numb
        alphaArr = ("a".."z").to_a
        alphaArr[numb-1]
    end


    private
    def flights_params
        params.permit(:flight_number, :origin, :destination, :departure_date,:airplane_id)
    end

    


end
