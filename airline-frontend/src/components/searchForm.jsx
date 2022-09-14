import React from 'react';


class SearchForm extends React.Component {

    state = {
        startingLocation: '',
        endingLocation: ''
    };      //  state

    handleStartLoc = ( event ) => {
        this.setState({ startingLocation: event.target.value })
    };      //  handleStartLoc()
    
    handleEndLoc = ( event ) => {
        this.setState({ endingLocation: event.target.value })
    };      //  handleEndLoc()

    handleSubmit = ( event ) => {
        event.preventDefault();         //  Stops form from auto-reloading page on submits
        console.log(`Form submitted`, this.state.startingLocation, this.state.endingLocation);
        
    };      //  handleSubmit()

    render (){


        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Search Flight</h4>
                <input type="text" placeholder='Starting Location' onChange={this.handleStartLoc}/>
                <input type="text" placeholder='Ending Destination' onChange={this.handleEndLoc}/>
                <button>Search For Flights</button>
            </form>
        );  // return()


    }       // render


}           // class SearchForm


export default SearchForm;