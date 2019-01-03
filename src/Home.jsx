import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

// import { XMAS_IN_RI } from './photos/index';
import BAY_BRIDGE from './photos/bay_bridge.jpeg';

const layers = [{
  image: BAY_BRIDGE,
  expanded: true,
  amount: 0.2,
  slowerScrollRate: false,
}];

/* eslint-disable-next-line react/prefer-stateless-function */
class Home extends Component {
  render() {
    return (
      <div className="home">
        <ParallaxBanner layers={layers}>
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${BAY_BRIDGE})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />
        </ParallaxBanner>
      </div>
    );
  }
}

export default Home;
