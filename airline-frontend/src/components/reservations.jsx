// Have split what was originally 'reservations.jsx' into two seperate .jsx files"
//
// 'MakeReservation.jsx'        and         'reservations.jsx'
//
// Purpose of 'reservations.jsx' is now to act as a quick referral for 
//  the user to view existing bookings]
//      [The purpose of 'MakeReservation.jsx' is to handle all of the 
//      function associated with booking/reserving of new flights.]

import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';

const RAILS_ANGEL_AIRLINES_RESERVATIONS = `http://localhost:3000/bob/reservations.json`

class Reservations extends React.Component {

    state = {

        reservations: [],
        loading: true,
        error: null,

    }       //  state

    fetchBookings = async () => {

        try {
            const response = await axios.get(RAILS_ANGEL_AIRLINES_RESERVATIONS);
            console.log(`response`, response.data);

        } catch (error) {

            this.setState({
                loading: false,
                error: error
            })  //  this.setState

        }       //  catch

    }       //  fetchReservations()

    render (){


        return(
            <div>
                <h2>Current Reservations of Bob</h2>
                
            </div>
        );  // return()


    }       // render()


}           // class Reservations


export default Reservations;   