import React, { Component } from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Header from './Header';
import Nav from './Nav';
import './App.css';

// import { XMAS_IN_RI } from './photos/index';
import BAY_BRIDGE from './photos/bay_bridge.jpeg';

const layers = [{
  image: BAY_BRIDGE,
  expanded: true,
  amount: 0.2,
  slowerScrollRate: false,
}];

/* eslint-disable-next-line react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <Header />
          <Nav />
          <main>
            <ParallaxBanner layers={layers}>
              <div
                className="hero-image"
                style={{ backgroundImage: `url(${BAY_BRIDGE})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              />
            </ParallaxBanner>
          </main>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
