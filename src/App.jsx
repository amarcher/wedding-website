import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Hotels from './Hotels';

import './App.css';

/* eslint-disable-next-line react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ParallaxProvider>
            <Header />
            <Nav />
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Home} />
              <Route path="/topics" component={Home} />
              <Route path="/hotels" component={Hotels} />
            </main>
          </ParallaxProvider>
        </div>
      </Router>
    );
  }
}

export default App;
