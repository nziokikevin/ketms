import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import "../src/App.css"
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Saccos from './components/Saccos';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ViewSacco from './components/ViewSacco';
import Drivers from './components/Drivers';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/about">
            <About />
          </Route>
          <Route exact path = "/saccos">
            <Saccos />
          </Route>
          <Route exact path = "/saccos/:id">
            <ViewSacco />
          </Route>
          <Route exact path = "/drivers">
            <Drivers />
          </Route>
          <Route exact path = "/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>

  )
}

export default App;
