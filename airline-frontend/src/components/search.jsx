import '../App.css';

import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm';  {/* provides form for User to search flights by begining and ending destination */}
// <<<<<<< HEAD

const RAILS_ANGEL_AIRLINES_FLIGHTS = 'http://localhost:3000/flights'
// =======
import Reservation from './reservation';
// >>>>>>> 0ddaf72e24316655d4c690f4eb527c94821bfc75///////

class Search extends React.Component {

    state = {
        flights: [],
        loading: true,
        error: null,
    };      //  state

    postFlightDetails = async(startLoc, endLoc) => {
        console.log(`SearchForm:postFlightDetails()`, startLoc, endLoc);

        try {
            const response = await axios.post
            (RAILS_ANGEL_AIRLINES_FLIGHTS, {content: startLoc}, {content: endLoc});
            console.log(`Post Response`, response.data);
            
        } catch (error) {
            console.log(``);
            
        }   //  catch
        
    }       //  postFlightDetails()

    render (){


        return(
            <div className="App">

                <h1>Search Flight</h1>

                <p>flight info here</p>

{/* <<<<<<< HEAD */}
                <SearchForm notifyParent={ this.postFlightDetails }/> 

                <h5>TESTING: Show data passed from SearchForm to Search</h5>
             
{/* ======= */}
                {/* <SearchForm/>  */}
{/* >>>>>>> 0ddaf72e24316655d4c690f4eb527c94821bfc75 */}
                
                {// <reservation/> testing only
                 }            
                {/* <Reservation/> */}
            </div>
        );  // return


    }       // render()


}           // class Search


export default Search;