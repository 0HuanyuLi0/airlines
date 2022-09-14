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
User.destroy_all
u1 = User.create! name: 'Admin',     email: 'Admin@user.com',    admin: true
u2 = User.create! name: 'Luke',      email: 'Luke@user.com',     admin: false
u3 = User.create! name: 'Kris',      email: 'Kris@user.com',     admin: false


# Reservation
Reservation.destroy_all
r1 = Reservation.create!(
    user_id:u1.id,
    flight_id:f1.id,
    row:2,
    col:3
)

r2 = Reservation.create!(
    user_id:u2.id,
    flight_id:f2.id,
    row:6,
    col:2
)



