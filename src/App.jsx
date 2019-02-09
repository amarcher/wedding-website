import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Nav from './components/Nav';
import OurStory from './pages/OurStory';
import EventDetails from './pages/EventDetails';
import Accommodations from './pages/Accommodations';
import WeddingParty from './pages/WeddingParty';

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
              <Route exact path="/" component={OurStory} />
              <Route path="/event-details" component={EventDetails} />
              <Route path="/wedding-party" component={WeddingParty} />
              <Route path="/accommodations" component={Accommodations} />
            </main>
          </ParallaxProvider>
        </div>
      </Router>
    );
  }
}

export default App;
