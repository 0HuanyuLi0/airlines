import React from 'react';

import './App.css';
import './css/flights.css'
import MakeReservation from './components/MakeReservation';
import Reservations from './components/reservations';
import Search from './components/search';
import {Route, HashRouter as Router, Link, Switch} from 'react-router-dom';

class App extends React.Component {
  
  render(){
    
    return (

      <div className="App">
        <Router>
        
          <header>
            <h1>sei55 - Angel Airlines</h1>
            <nav>

              {'\t'}{'\t'}
              <Link to="/make_reservation">New Reservation</Link>
              {'\t'}{'\t'}
              {'\t'}{'\t'}
              <Link to="/">Home</Link>
              {'\t'}{'\t'}
              {'\t'}{'\t'}
              <Link to="/reservations/">User Reservations</Link>
              {'\t'}{'\t'}
            </nav>
            <hr />
          </header>
          
          
          
          < Route exact path="/" component={Search} />
          < Route exact path="/MakeReservation" component={MakeReservation} />
          < Route exact path="/reservations/" component={Reservations} />


          <hr />
          
          <MakeReservation />





          <footer>
            <hr />
            &copy; sei55 - Angel Airlines.2022
          </footer>

        </Router>

      </div>
    );
  
  }

}

export default App;
// test