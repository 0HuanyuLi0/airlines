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
            <p>From {props.flight.origin}</p> to <p>{props.flight.destination}.</p>
            
        </li>
    )
}


class Search extends React.Component {

    state = {
        flights: [],
        loading: true,
        error: null,
    };      //  state

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

    componentDidMount(){

        console.log(`componentDidMount()`);
        this.fetchFlights();
        
    }

    fetchFlights = async() => {

        try {
            const response = await axios.get(RAILS_ANGEL_AIRLINES_FLIGHTS);
            console.log(`response`, response.data);
            
            this.setState({
                secrets: response.data,

                loading:false,
                
            })
            
        } catch (error) {

            this.setState({
                loading: false,
                error: error
            })
        }

    }

    render (){


        return(
            <div className="App">

                <h1>Search Flight</h1>

                <p>flight info here</p>


                <SearchForm notifyParent={ this.postFlightDetails }/> 

                <h5>TESTING: Show data passed from SearchForm to Search</h5>

                <div>
                    <h2>TEST for FLIGHT INFO</h2>
                    {/* {FlightInformation(props)} */}
                </div>
                

            </div>
        );  // return


    }       // render()


}           // class Search


export default Search;