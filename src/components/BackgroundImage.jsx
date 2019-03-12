import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PreloadedImage from './PreloadedImage';

import './BackgroundImage.scss';

const propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

const defaultProps = {
  className: undefined,
};

// eslint-disable-next-line react/prefer-stateless-function
class BackgroundImage extends Component {
  render() {
    const { className, src } = this.props;

    const imageClassName = classNames('background-image', {
      [className]: !!className,
    });

    return (
      <PreloadedImage
        alt="background"
        className={imageClassName}
        src={src}
      />
    );
  }
}

BackgroundImage.propTypes = propTypes;
BackgroundImage.defaultProps = defaultProps;

export default BackgroundImage;
