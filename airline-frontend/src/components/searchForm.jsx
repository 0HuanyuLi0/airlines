import React from 'react';


class SearchForm extends React.Component {


    render (){


        return(
            <form className='App'>
                <h4>Search Flight</h4>
                <input type="text" placeholder='Starting Location'/>
                <input type="text" placeholder='Ending Destination'/>
                <button>Search For Flights</button>
            </form>
        );


    } // render


} // class SearchForm


export default SearchForm;