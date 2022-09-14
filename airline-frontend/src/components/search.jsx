import '../App.css';

import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm';  {/* provides form for User to search flights by begining and ending destination */}
import Reservation from './reservation';

class Search extends React.Component {


    render (){


        return(
            <div className="App">

                <h1>Search Flight</h1>

                <p>flight info here</p>

                <SearchForm/> 
                
                {// <reservation/> testing only
                 }            
                <Reservation/>
            </div>
        );


    } // render


} // class Search


export default Search;