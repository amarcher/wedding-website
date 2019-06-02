import React from 'react';

import RSVPForm from '../components/RSVPForm';
import BackgroundImage from '../components/BackgroundImage';
import NewportSunset from '../photos/NewportSunset.jpg';

import './Rsvp.scss';

function Rsvp() {
  return (
    <div className="rsvp">
      <BackgroundImage src={NewportSunset} className="rsvp__background" />
      <RSVPForm />
    </div>
  );
}

export default Rsvp;
