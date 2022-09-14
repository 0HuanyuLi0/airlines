import logo from './logo.svg';
// import './App.css';
import './css/flights.css'
import Reservation from './components/reservation';
import Search from './components/search';
import {Route, HashRouter as Router, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav>
        <a href="/">Home</a> 
        {' '}
        <a href="/">BoB</a>
      </nav>
      <hr />

      <Router>

        <Search />
        <Reservation />

      </Router>
      
      <footer>
        <hr />
        &copy; sei55 - Angel Airlines.2022
      </footer>

    </div>
  );
}

export default App;
