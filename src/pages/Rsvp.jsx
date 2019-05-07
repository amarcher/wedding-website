import React, { Component } from 'react';

import RSVPForm from '../components/RSVPForm';
import BackgroundImage from '../components/BackgroundImage';
import NewportBridge from '../photos/NewportBridge.jpg';

import './Rsvp.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class Rsvp extends Component {
  render() {
    return (
      <div className="rsvp">
        <BackgroundImage src={NewportBridge} className="rsvp__background" />
        <RSVPForm />
      </div>
    );
  }
}

export default Rsvp;
