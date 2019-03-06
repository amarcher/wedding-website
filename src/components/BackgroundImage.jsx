import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BackgroundImage.scss';

const propTypes = {
  src: PropTypes.string.isRequired,
};

// eslint-disable-next-line react/prefer-stateless-function
class BackgroundImage extends Component {
  render() {
    const { src } = this.props;

    return (
      <img alt="background" className="background-image" src={src} />
    );
  }
}

BackgroundImage.propTypes = propTypes;

export default BackgroundImage;
