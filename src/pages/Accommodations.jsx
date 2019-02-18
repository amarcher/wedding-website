import React, { Component } from 'react';

import PreloadedFrame from '../components/PreloadedFrame';

import './Accommodations.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class Accommodations extends Component {
  render() {
    return (
      <div className="accommodations">
        <PreloadedFrame
          title="Accomodations"
          src="https://www.google.com/maps/d/embed?mid=1MqGne-kS5gbNT_60vq4XjsO0nWKpkTev"
          className="accomodations__map"
        />
      </div>
    );
  }
}

export default Accommodations;
