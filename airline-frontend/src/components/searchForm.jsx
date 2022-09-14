import React from 'react';


class SearchForm extends React.Component {

    state = {
        secretText: ''
    };      //  state

    handleSubmit = ( event ) => {
        event.preventDefault();         //  Stops form from auto-reloading page on submits
        console.log(`Form submitted`, this.state.secretText);
        
    };      //  handleSubmit

    render (){


        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Search Flight</h4>
                <input type="text" placeholder='Starting Location'/>
                <input type="text" placeholder='Ending Destination'/>
                <button>Search For Flights</button>
            </form>
        );  // return()


    }       // render


}           // class SearchForm


export default SearchForm;