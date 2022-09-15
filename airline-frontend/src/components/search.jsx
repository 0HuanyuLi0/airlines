import '../App.css';
// import Reservations from './components/reservations';
import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm';
import {Route, HashRouter as Router, Link, Switch} from 'react-router-dom';

{/* 
 ^^^ provides form for User to search flights by begining and ending destination 
*/}
import {Route, HashRouter as Router, Link, Switch} from 'react-router-dom';

const RAILS_ANGEL_AIRLINES_FLIGHTS = 'http://localhost:3000/flights.json'
// import Reservation from './reservation';

function FlightInformation(props) {

    return (
        <li>

            <p>{props.flight.departure_date}</p>
            {/* <p><a href={`/bob/reservations/${props.flight.flight_number}`}>{props.flight.flight_number}</a></p> */}
            <p><Link to={`/bob/reservations/${props.flight.flight_number}`}>{props.flight.flight_number}</Link></p>
            <p> {`${props.flight.origin} > ${props.flight.destination}`}</p>
            <p>{props.airplane.name}</p>
            <p>{props.airplane.seating_column * props.airplane.seating_row}</p>

        </li>
    )
}




class Search extends React.Component {



    state = {
        flights: [],
        airplanes: [],
        loading: true,
        error: null,
    };      //  state{}

    postFlightDetails = async ([startLoc, endLoc]) => {
        console.log(`SearchForm:postFlightDetails()`, startLoc, endLoc);

        try {
            const response = await axios.get
                (`http://localhost:3000/flights/search/${startLoc}+${endLoc}`);
            console.log(`Post Response`, response.data);
            if (response.data.flights.length === 0) {
                this.fetchFlights()
                return
            }

            this.setState({
                flights: response.data.flights,
                airplanes: response.data.airplanes,
                loading: false,

            })


        } catch (error) {
            console.log(``);

        }   //  catch

    }       //  postFlightDetails()

    componentDidMount() {                //  function invokes fetchFlights()

        console.log(`componentDidMount()`);
        this.fetchFlights();
        // this.fetchBookings()
        setInterval(this.fetchFlights,2000)

    }       // componentDidMount()

    fetchFlights = async () => {         //  queries DB for flight info

        try {
            const response = await axios.get(RAILS_ANGEL_AIRLINES_FLIGHTS);
            // console.log(`response`, response.data);

            this.setState({
                flights: response.data.flights,
                airplanes: response.data.airplanes,
                loading: false,

            })  //  this.setState

        } catch (error) {

            this.setState({
                loading: false,
                error: error
            })  //  this.setState

        }       //  catch

    }           //  fetchFlights()

    fetchBookings = async (flightID) => {

        try {
            const response = await axios.get(`http://localhost:3000/bob/reservations/${flightID}`);
            console.log(`response`, response.data);

        } catch (error) {

            this.setState({
                loading: false,
                error: error
            })  //  this.setState

        }       //  catch

    }           //  fetchBookings()




    render() {
        return (
            <div className="App">
                <Router>
                    <div id="flightSearchContainer">
                        <SearchForm notifyParent={this.postFlightDetails} id="searchFormContainer" />
                        <div id="locationKeysContainer">
                            <h2> Available Flights </h2>
                            <p id="locationKeysInstructions">
                                To use <strong>Search Flights</strong>, enter the desired Airport Designation Code into either the 'From' field or the 'To' field.
                            </p>
                            <h5 id="locationKeyHeader"> ANGEL AIRLINES AVAILABLE FLIGHTS:</h5>
                            <ul className="locationKeysList" id="availableFlightList">
                                <li>Departing: JFK - Arriving: LAX</li>
                                <li>Departing: JFK - Arriving: SFO</li>
                            </ul>
                            <h5 id="locationKeyHeader"><strong>LOCATIONS KEY</strong></h5>
                            <ul className="locationKeysList">
                                <li className="locationKeysItem">JFK - <em>John F. Kennedy International Airport, New York, New York City</em></li>
                                <li className="locationKeysItem">LAX - <em>Los Angeles International Airport, Los Angeles, California</em></li>
                                <li className="locationKeysItem">SFO - <em>San Francisco International Airport, San Francisco, California</em></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        

                        <h2 className='sub-title'>Flights</h2>
                        <div className="col-title">
                            <p>Date</p>
                            <p>Flight</p>
                            <p>From {'>'} To</p>
                            <p>Plane</p>
                            <p>Seats</p>
                        </div>

                        {
                            // THIS section contains data of ALL flights from backend
                            this.state.loading
                                ?
                                <p>Loading Flights . . .</p>
                                :
                                <ul className='table'>
                                    {this.state.flights.map(f => <FlightInformation key={f.id} flight={f} airplane={this.state.airplanes.find(a => a.id === f.airplane_id)} />)}
                                </ul>

                        }
                    </div>
                </Router>


            </div>
        );  // return

    }       // render()


}           // class Search


export default Search;