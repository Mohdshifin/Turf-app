import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Booking from './Components/Booking';
import Contact from './Components/Contact';

function App() {
  return (
    // <Router>
      <div className="App">
        <Navbar></Navbar>
        <section id='Home'>
          <Home></Home>
        </section>
        <section id='about'>
          <h2>About us</h2>
          <About></About>
        </section>
          <section id="Booking">
          <h2>Booking</h2>
        {/* <Switch>
        <Route path=''> */}
            <Booking></Booking>
        {/* </Route> 
        </Switch> */}
          </section>
        <section id='Contact'>
          <Contact></Contact>
        </section>
      </div>
    /* </Router> */
  );
}

export default App;
