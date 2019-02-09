import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import BAKER_BEACH_CLOSEUP from '../photos/baker_beach_closeup.jpg';

const layers = [{
  image: BAKER_BEACH_CLOSEUP,
  expanded: true,
  amount: 0.4,
  slowerScrollRate: false,
}];

/* eslint-disable-next-line react/prefer-stateless-function */
class Accommodations extends Component {
  render() {
    return (
      <div className="accommodations">
        <ParallaxBanner layers={layers} style={{ marginTop: -60, height: '50vw' }}>
          <div />
        </ParallaxBanner>
      </div>
    );
  }
}

export default Accommodations;
