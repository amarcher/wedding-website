import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PreloadedImage from './PreloadedImage';

import './InfoCard.scss';

const propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  logo: PropTypes.string,
};

const defaultProps = {
  logo: undefined,
};

/* eslint-disable-next-line react/prefer-stateless-function */
class InfoCard extends Component {
  render() {
    const { text, logo } = this.props;

    return (
      <div className="info-card">
        <div className="info-card__content">
          {logo && <PreloadedImage alt="logo" src={logo} className="info-card__logo" />}
          <div className="info-card__description">
            {text.map(line => <p>{line}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

InfoCard.defaultProps = defaultProps;
InfoCard.propTypes = propTypes;

export default InfoCard;
