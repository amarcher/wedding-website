import React from 'react';
import PropTypes from 'prop-types';

import LocationPin from './LocationPin';
import PreloadedImage from './PreloadedImage';
import './ProfileCard.scss';

const propTypes = {
  distance: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  then: PropTypes.string.isRequired,
  now: PropTypes.string.isRequired,
};

function ProfileCard({
  distance,
  img,
  name,
  now,
  then,
  title,
  relation,
}) {
  return (
    <div className="profile-card">
      <PreloadedImage className="profile-card__image" src={img} />
      <div className="profile-card__content">
        <div className="profile-card__name_and_distance">
          <p>
            <span className="profile-card__name">{name}</span>
            <span>, </span>
            <span>{title}</span>
          </p>
          <p className="profile-card__distance">
            <LocationPin className="profile-card__location_pin" />
            {distance}
          </p>
        </div>
        <div className="profile-card__description">
          <p className="profile-card__relation">{relation}</p>
          <p className="profile-card__then">
            <span className="profile-card__prompt">Previously: </span>
            {then}
          </p>
          <p className="profile-card__now">
            <span className="profile-card__prompt">Now: </span>
            {now}
          </p>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = propTypes;
export default ProfileCard;
