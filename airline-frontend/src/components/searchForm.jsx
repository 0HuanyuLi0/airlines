import React from 'react';


class SearchForm extends React.Component {

    handleSubmit = ( event ) => {
        event.preventDefault();     //      Stops form from auto-reloading page on submits
    }

    render (){


        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Search Flight</h4>
                <input type="text" placeholder='Starting Location'/>
                <input type="text" placeholder='Ending Destination'/>
                <button>Search For Flights</button>
            </form>
        );


    } // render


} // class SearchForm


export default SearchForm;