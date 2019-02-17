import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import BelleMer1 from '../photos/BelleMer/BelleMer1.png';
import BelleMer2 from '../photos/BelleMer/BelleMer2.png';
import BelleMer3 from '../photos/BelleMer/BelleMer3.jpg';
import BelleMer4 from '../photos/BelleMer/BelleMer4.jpg';

import './EventDetails.scss';

const layer = {
  expanded: true,
  amount: 0.4,
  slowerScrollRate: false,
};

function renderBanners() {
  return [BelleMer1, BelleMer2, BelleMer3, BelleMer4].map(image => (
    <ParallaxBanner layers={[{ ...layer, image }]} style={{ height: '100vh' }}>
      <div />
    </ParallaxBanner>
  ));
}

/* eslint-disable-next-line react/prefer-stateless-function */
class EventDetails extends Component {
  render() {
    return (
      <div className="event-details">
        {renderBanners()}
      </div>
    );
  }
}

export default EventDetails;
