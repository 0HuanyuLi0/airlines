class AirplanesController < ApplicationController

    def new
        @airplane = Airplane.new
       
        
    end

    def create
        Airplane.create airplanes_params
        redirect_to airplanes_path
    end

    
    def index
        @airplanes = Airplane.all
        
    end

    def show
       Airplane.find params[:id]
    end

    
    def destroy
       Airplane.destroy params[:id]
       redirect_to airplanes_path
    end


    private
    def airplanes_params
        params.permit(:name, :seating_row, :seating_column)
    end

    

end
