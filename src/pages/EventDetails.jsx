import React, { Component } from 'react';

import EventCard from '../components/EventCard';
import { events } from '../content';

import './EventDetails.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class EventDetails extends Component {
  render() {
    return (
      <div className="event-details">
        {events.map(event => (
          <EventCard {...event} />
        ))}
      </div>
    );
  }
}

export default EventDetails;
