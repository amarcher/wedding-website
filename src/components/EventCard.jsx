import React from 'react';
import PropTypes from 'prop-types';

import LocationPin from './LocationPin';

import './EventCard.scss';

const propTypes = {
  date: PropTypes.string.isRequired,
  details: PropTypes.string,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  location: PropTypes.string.isRequired,
  locationLink: PropTypes.string.isRequired,
  attire: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  addressLink: PropTypes.string.isRequired,
};

const defaultProps = {
  subtitle: '',
  details: '',
};

function EventCard({
  date,
  details,
  time,
  title,
  subtitle,
  location,
  locationLink,
  address,
  addressLink,
  attire,
}) {
  return (
    <div className="event-card">
      <div className="event-card__date_and_time">
        <p className="event-card__date">{date}</p>
      </div>
      <div className="event-card__title_and_details">
        <div className="event-card__title_and_subtitle">
          <p className="event-card__title">{title}</p>
          {subtitle && <p className="event-card__subtitle">{subtitle}</p>}
          {details && <p className="event-card__details">{details}</p>}
        </div>
        <div className="event-cart__time_location_and_attire">
          <p className="event-card__time">{time}</p>
          <p className="event-card__location">
            <a href={locationLink} target="_blank" rel="noreferrer noopener">{location}</a>
          </p>
          <p className="event-card__location">
            <LocationPin className="event-card__location_pin" />
            <a href={addressLink} target="_blank" rel="noreferrer noopener">{address}</a>
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
