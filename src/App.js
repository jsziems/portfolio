import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* ToDo:  Add Routes */}
          {/* <Route exact path='/'>
            <Home />
          </Route> */}
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
