import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PreloadedImage from './PreloadedImage';
import Carousel from './Carousel';

import './Hotel.scss';

const propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.string,
  nightlyPrice: PropTypes.string,
};

const defaultProps = {
  instructions: '',
  nightlyPrice: '',
};

/* eslint-disable-next-line react/prefer-stateless-function */
class Hotel extends Component {
  render() {
    const {
      nightlyPrice,
      images,
      instructions,
      link,
      logo,
      name,
    } = this.props;

    return (
      <div className="hotel">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Carousel className="hotel__image" images={images} />
          <div className="hotel__content">
            <PreloadedImage alt={name} src={logo} className="hotel__logo" imageClassName="hotel__logo-image" />
            <div className="hotel__description">
              {instructions}
            </div>
            <div className="hotel__description">
              {nightlyPrice}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

Hotel.defaultProps = defaultProps;
Hotel.propTypes = propTypes;

export default Hotel;
