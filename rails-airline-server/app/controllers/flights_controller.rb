class FlightsController < ApplicationController

    def index
        @flights = Flight.all.reverse
        @airplanes = Airplane.all

        respond_to do |format|

            format.html # show.html.erb
            format.json { render json:{flights:@flights,airplanes:@airplanes}  }
          
        end
       
    end

    def create
        Flight.create flights_params
        redirect_back(fallback_location:"/flights")
    end

    def destroy
       Flight.destroy params[:id]
       redirect_back(fallback_location:"/flights")
    end


    def detail
        @flight = Flight.find params[:id]
        @airplane = @flight.airplane
        @row = @airplane.seating_row
        @col = @airplane.seating_column
        @reservations = Reservation.where(flight_id:@flight.id).reverse
        @users = User.all
        @alphaArr = ("A".."Z").to_a
        @bookedArr = @reservations.pluck(:row).zip(@reservations.pluck(:col))
        p @bookedArr
    
         
    end

    private
    def flights_params
        params.permit(:flight_number, :origin, :destination, :departure_date,:airplane_id)
    end

    


end
