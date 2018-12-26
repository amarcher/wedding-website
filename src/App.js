import React, { Component } from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
// import Nav from './Nav';
import './App.css';

// import { XMAS_IN_RI } from './photos/index';
import BAY_BRIDGE from './photos/bay_bridge.jpeg';

const layers = [{
  image: BAY_BRIDGE,
  expanded: true,
  amount: 0.2,
  slowerScrollRate: false,
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <header className="App-header">
            <h1>Andy & Alicia</h1>
          </header>
          <main>
            <div className="hero-container">
              <ParallaxBanner layers={layers}>
                <div
                    className="hero-image"
                    style={{ backgroundImage: `url(${BAY_BRIDGE})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                />
              </ParallaxBanner>
            </div>
          </main>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
