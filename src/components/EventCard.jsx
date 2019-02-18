import React from 'react';
import PropTypes from 'prop-types';

import LocationPin from './LocationPin';

import './EventCard.scss';

const propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  location: PropTypes.string.isRequired,
  attire: PropTypes.string.isRequired,
};

const defaultProps = {
  subtitle: '',
};

function EventCard({
  date,
  time,
  title,
  subtitle,
  location,
  attire,
}) {
  return (
    <div className="event-card">
      <div className="event-card__date_and_time">
        <p className="event-card__date">{date}</p>
      </div>
      <div className="event-card__title_and_details">
        <div className="event-card__title_and_subitle">
          <p className="event-card__title">{title}</p>
          {subtitle && <p className="event-card__subtitle">{subtitle}</p>}
        </div>
        <div className="event-cart__time_location_and_attire">
          <p className="event-card__time">{time}</p>
          <p className="event-card__location">
            <LocationPin className="event-card__location_pin" />
            {location}
          </p>
          <p className="event-card__attire_section">
            <span className="event-card__attire">
              Attire:
            </span>
            &nbsp;
            {attire}
          </p>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = propTypes;
EventCard.defaultProps = defaultProps;
export default EventCard;
