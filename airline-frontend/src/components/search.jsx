import '../App.css';

import React from 'react';
import axios from 'axios';
import SearchForm from './searchForm';


class Search extends React.Component {


    render (){


        return(
            <div className="App">

                <h1>Search Flight</h1>

                <p>flight info here</p>

                <SearchForm/>
                
            </div>
        );


    } // render


} // class Search


export default Search;