import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import HIKE from './photos/hike.jpeg';

const layers = [{
  image: HIKE,
  expanded: true,
  amount: 0.4,
  slowerScrollRate: false,
}];

/* eslint-disable-next-line react/prefer-stateless-function */
class Home extends Component {
  render() {
    return (
      <div className="home">
        <ParallaxBanner layers={layers} style={{ height: '30vw' }}>
          <div />
        </ParallaxBanner>
      </div>
    );
  }
}

export default Home;
