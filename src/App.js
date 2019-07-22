import React from 'react';
import './App.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import Contact from './components/Contact';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
       <Home/>
        <Switch>
          <Route exact path="/" component={this}/>
          <Route path="/Product" component={Product}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
