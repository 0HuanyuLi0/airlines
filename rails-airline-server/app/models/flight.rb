class Flight < ApplicationRecord
    # Flight belongs to an Airplane.
    # A Flight has many Reservations and a Reservation belongs to a Flight.
    belongs_to :airplane
    has_many :reservations
end
