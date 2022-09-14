import '../App.css';

import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm';  {/* provides form for User to search flights by begining and ending destination */}

const RAILS_ANGEL_AIRLINES_FLIGHTS = 'http://localhost:3000/flights'
// import Reservation from './reservation';
function FlightInformation(props){
    return(
        <li>

            <strong>Flight - {props.flight.name}</strong>
            <br />
            <p> {
                    `From ${props.flight.origin} to ${props.flight.destination}.`
                }   
            </p>
            
        </li>
    )
}


class Search extends React.Component {

    state = {
        flights: [],
        loading: true,
        error: null,
    };      //  state{}

    postFlightDetails = async([startLoc, endLoc]) => {
        console.log(`SearchForm:postFlightDetails()`, startLoc, endLoc);

        try {
            const response = await axios.post
            (RAILS_ANGEL_AIRLINES_FLIGHTS, {content: startLoc}, {content: endLoc});
            console.log(`Post Response`, response.data);
            
        } catch (error) {
            console.log(``);
            
        }   //  catch
        
    }       //  postFlightDetails()

    componentDidMount(){                //  function invokes fetchFlights()

        console.log(`componentDidMount()`);
        this.fetchFlights();
        
    }       // componentDidMount()

    fetchFlights = async() => {         //  queries DB for flight info

        try {
            const response = await axios.get(RAILS_ANGEL_AIRLINES_FLIGHTS);
            console.log(`response`, response.data);
            
            this.setState({
                flights: response.data,

                loading:false,
                
            })  //  this.setState
            
        } catch (error) {

            this.setState({
                loading: false,
                error: error
            })  //  this.setState

        }       //  catch

    }           //  fetchFlights()

    render (){


        return(
            <div className="App">
               
                <h1>Search Flight</h1>

                <p>flight info here</p>


                <SearchForm notifyParent={ this.postFlightDetails }/> 

                <h5>TESTING: Show data passed from SearchForm to Search</h5>

                {
                    this.state.loading
                    ?
                    <p>Loading Flights . . .</p>
                    :
                    <ul>
                        { this.state.flights.map( f => <FlightInformation flight={ f }/> ) }
                    </ul>

                }
                

            </div>
        );  // return

            

    }       // render()


}           // class Search


export default Search;