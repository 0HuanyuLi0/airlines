// this.Class is for the creation of a form to be used by search.jsx 
//      to query flights fitting parameters given by the user. 

//  Form contents:
//      Header
//      Input Fields x 2 - 'starting location' and 'ending destination' 
//      Button

//  Class contents:
//      State           -   for holding data of start/end loc
//      handleStartLoc  -   function for updating value of state.startingLocation
//      handleEndLoc    -   function for updating value of state.endingLocation
//      handlesSubmit   -   function for handling default operation of submit event

import React from 'react';


class SearchForm extends React.Component {

    state = {                                   //  holds data of start/end loc as updated by user
        startingLocation: '',
        endingLocation: ''
    };      //  state

    handleStartLoc = ( event ) => {             //  updates state.startingLocation when form is submitted
        this.setState({ startingLocation: event.target.value })
    };      //  handleStartLoc()
    
    handleEndLoc = ( event ) => {               //  updates state.endingLocation when form is submitted 
        this.setState({ endingLocation: event.target.value })
    };      //  handleEndLoc()

    handleSubmit = ( event ) => {               //  stop form from auto-reloading & notify parent of submit
        event.preventDefault();         
        console.log(`Form submitted`, this.state.startingLocation, this.state.endingLocation);      //      check === true  
        
        this.props.notifyParent( [this.state.startingLocation, this.state.endingLocation] )
    };      //  handleSubmit()

    render (){                                  //  renders what will appear on the page when SearchForm is imported


        return(
            <form onSubmit={this.handleSubmit} className="border-form">
               <h2 className="searchHeader">Search Flights</h2>
                <input type="text" placeholder='From' onChange={this.handleStartLoc}/>
                {' '}
                <input type="text" placeholder='To' onChange={this.handleEndLoc}/>
                <br />
                <input type="submit" value='Search' />
            </form>
        );  // return()


    }       // render


}           // class SearchForm


export default SearchForm;