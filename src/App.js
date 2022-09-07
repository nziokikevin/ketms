import React from 'react';
import {Switch, Route} from "react-router-dom"
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Companies from './components/Companies';
import Services from './components/Services';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/about">
          <About />
        </Route>
        <Route exact path = "/companies">
          <Companies />
        </Route>
        <Route exact path = "/services">
          <Services />
        </Route>
        <Route exact path = "/contact-us">
          <ContactUs />
        </Route>
      </Switch>
    </div>

  )
}

export default App;
