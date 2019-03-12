import React, { Component } from 'react';

import PreloadedFrame from '../components/PreloadedFrame';
import Hotel from '../components/Hotel';
import InfoCard from '../components/InfoCard';
import BackgroundImage from '../components/BackgroundImage';
import NewportBridge from '../photos/NewportBridge.jpg';
import hotels, { hotelInfo, airportInfo, trainInfo } from '../hotels';

import './Accommodations.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class Accommodations extends Component {
  render() {
    return (
      <div className="accommodations">
        <BackgroundImage src={NewportBridge} className="accommodations__background" />
        <div className="accommodations__travel">
          <InfoCard text={airportInfo} logo="https://cdn.dribbble.com/users/839429/screenshots/4519779/plane-travel-icon-rebound2.gif" />
          <InfoCard text={trainInfo} logo="https://cdn.dribbble.com/users/877668/screenshots/3587574/google-train.gif" />
        </div>
        <div className="accommodations__info">
          {hotelInfo}
        </div>
        <div className="accommodations__hotels">
          {hotels.map(hotel => <Hotel {...hotel} key={hotel.name} />)}
        </div>
        <PreloadedFrame
          title="Accomodations"
          src="https://www.google.com/maps/d/u/0/embed?mid=1MqGne-kS5gbNT_60vq4XjsO0nWKpkTev"
          className="accommodations__map"
        />
      </div>
    );
  }
}

export default Accommodations;
