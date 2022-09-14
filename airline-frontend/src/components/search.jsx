// import '../App.css';

import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm'; {/* provides form for User to search flights by begining and ending destination */ }

const RAILS_ANGEL_AIRLINES_FLIGHTS = 'http://localhost:3000/flights.json'
// import Reservation from './reservation';

function FlightInformation(props) {

    return (
        <li>

            <p>{props.flight.departure_date}</p>
            <p>{props.flight.flight_number}</p>
            <p> {`${props.flight.origin} > ${props.flight.destination}`}</p>
            <p>{props.airplane.name}</p>
            <p>{props.airplane.seating_column * props.airplane.seating_row}</p>
    
        </li>
    )
}


class Search extends React.Component {

    state = {
        flights: [],
        airplanes:[],
        loading: true,
        error: null,
    };      //  state{}

    postFlightDetails = async ([startLoc, endLoc]) => {
        console.log(`SearchForm:postFlightDetails()`, startLoc, endLoc);

        try {
            const response = await axios.post
                (RAILS_ANGEL_AIRLINES_FLIGHTS, { content: startLoc }, { content: endLoc });
            console.log(`Post Response`, response.data);

        } catch (error) {
            console.log(``);

        }   //  catch

    }       //  postFlightDetails()

    componentDidMount() {                //  function invokes fetchFlights()

        console.log(`componentDidMount()`);
        this.fetchFlights();

    }       // componentDidMount()

    fetchFlights = async () => {         //  queries DB for flight info

        try {
            const response = await axios.get(RAILS_ANGEL_AIRLINES_FLIGHTS);
            console.log(`response`, response.data);

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

    render() {
        return (
            <div className="App">
                {/* <Router> */}
                    <h1>sei55 - Angel Airlines</h1>

                    <nav>
                        {'	'}|{'	'}
                        {/* <Link to="/">Home</Link> */}
                    </nav>

                    <hr />
                    


                    <SearchForm notifyParent={ this.postFlightDetails }/> 

                    {
                        this.state.loading
                        ?
                        <p>Loading Flights . . .</p>
                        :
                        <ul className='table'>
                            {this.state.flights.map(f => <FlightInformation key={f.id} flight={f} airplane={this.state.airplanes.find(a => a.id === f.airplane_id)} />)}
                        </ul>

                }

                    <footer>
                        <hr />
                        &copy; sei55 - Angel Airlines.2022
                    </footer>
                {/* </Router> */}
            </div>
        );  // return

    }       // render()


}           // class Search


export default Search;