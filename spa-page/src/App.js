import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css'

import Home from './page/Home';
import Stuff from './page/Stuff';
import Contact from './page/Contact';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/stuff">Stuff</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}></Route>
              <Route path='/stuff' component={Stuff}></Route>
              <Route path='/contact' component={Contact}></Route>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
