class CreateAirplanes < ActiveRecord::Migration[5.2]
  def change
    create_table :airplanes do |t|
      t.string :name
      t.integer :seating_row
      t.string :seating_column

      t.timestamps
    end
  end
end
