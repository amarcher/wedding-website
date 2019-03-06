import React, { Component } from 'react';

import EventCard from '../components/EventCard';
import BackgroundImage from '../components/BackgroundImage';
import { events } from '../content';
import Newport from '../photos/Newport.jpg';

import './EventDetails.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class EventDetails extends Component {
  render() {
    return (
      <div className="event-details">
        <BackgroundImage src={Newport} />
        {events.map(event => (
          <EventCard {...event} />
        ))}
      </div>
    );
  }
}

export default EventDetails;
