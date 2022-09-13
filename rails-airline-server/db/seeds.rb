# AIRPLANES
Airplane.destroy_all


a1 = Airplane.create!(
    name: 'Boeing 757',
    seating_row: 24,
    seating_column: 6
)

a2 = Airplane.create!(
    name: 'Airbus' ,
    seating_row: 24,
    seating_column: 6
)














# FLIGHTS
Flight.destroy_all

f1 = Flight.create!(
    flight_number:23,
    origin:'JFK',
    destination:'SFO',
    departure_date:'2013/01/03',
    airplane_id:a1.id
)

f2 = Flight.create!(
    flight_number:87,
    origin:'JFK',
    destination:'LAX',
    departure_date:'2013/03/03',
    airplane_id:a2.id
)


















# USERS




