# AIRPLANES
Airplane.destroy_all


Airplane.create!(
    name: 'Boeing 757',
    seating_row: 24,
    seating_column: 6
)

<<<<<<< HEAD
=======
Airplane.create!(
    name: 'Airbus' ,
    seating_row: 24,
    seating_column: 6
)














>>>>>>> 6a76eab91986d9fe4b45eb0b7520d52fed813393
# FLIGHTS
Flight.destroy_all

f1 = Flight.create!(
    flight_number:23,
    origin:'JFK',
    destination:'SFO',
    departure_date:'2013/01/03'
)

f2 = Flight.create!(
    flight_number:87,
    origin:'JFK',
    destination:'LAX',
    departure_date:'2013/03/03'
)















# USERS




