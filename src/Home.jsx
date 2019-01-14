import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

// import { XMAS_IN_RI } from './photos/index';
// import BAY_BRIDGE from './photos/bay_bridge.jpeg';
// import BAKER_BEACH_CLOSEUP from './photos/baker_beach_closeup.jpg';
import BAKER_BEACH from './photos/baker_beach.jpg';

const layers = [{
  image: BAKER_BEACH,
  expanded: true,
  amount: 0.2,
  slowerScrollRate: false,
}];

/* eslint-disable-next-line react/prefer-stateless-function */
class Home extends Component {
  render() {
    return (
      <div className="home">
        <ParallaxBanner layers={layers} style={{ height: '100vw' }}>
          <div />
        </ParallaxBanner>
      </div>
    );
  }
}

export default Home;
