import './App.css';
import './css/flights.css'
import Reservation from './components/reservation';
import Search from './components/search';
import {Route, HashRouter as Router, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      
        <header>
          <h1>sei55 - Angel Airlines</h1>
          <nav>
            {'\t'}{'\t'}
            <Link to="/">Home</Link>
            {'\t'}{'\t'}
            {'\t'}{'\t'}
            <Link to="/">Bob</Link>
            {'\t'}{'\t'}
          </nav>
          <hr />
        </header>
        
        
        
        <Route component={Search}/>


          
        <Reservation />



        <footer>
          <hr />
          &copy; sei55 - Angel Airlines.2022
        </footer>

      </Router>

    </div>
  );
}

export default App;
