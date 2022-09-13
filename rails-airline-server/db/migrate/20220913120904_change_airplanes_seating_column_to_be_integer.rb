class ChangeAirplanesSeatingColumnToBeInteger < ActiveRecord::Migration[5.2]
  def change
    change_column "airplanes", "seating_column", 'integer USING CAST(seating_column AS integer)'
  end
end
