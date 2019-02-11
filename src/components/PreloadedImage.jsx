import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './PreloadedImage.scss';

const propTypes = {
  src: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  useImg: PropTypes.bool,
};

const defaultProps = {
  className: '',
  imageClassName: '',
  style: {},
  useImg: false,
};

class PreloadedImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.setLoaded = this.setLoaded.bind(this);
  }

  componentWillMount() {
    this.setPreloader();
  }

  componentWillUnmount() {
    if (this.preloader) this.preloader.onload = null;
  }

  setLoaded() {
    this.setState(() => ({
      loaded: true,
    }));

    this.preloader.onload = null;
  }

  setPreloader() {
    const { src } = this.props;

    this.preloader = new Image();
    this.preloader.onload = this.setLoaded;
    this.preloader.src = src;
  }

  render() {
    const {
      className,
      imageClassName,
      style,
      useImg,
      src,
    } = this.props;
    const { loaded } = this.state;

    const containerClass = classNames('preloaded-image__container', {
      [className]: !!className,
    });

    if (useImg) {
      const imgClass = classNames('preloaded-image__img', {
        'preloaded-image__preloading': !loaded,
        [imageClassName]: imageClassName,
      });

      return (
        <div className={containerClass} style={style}>
          <img
            className={imgClass}
            alt={src}
            src={src}
          />
        </div>
      );
    }

    const imageClass = classNames('preloaded-image', {
      'preloaded-image__preloading': !loaded,
      [imageClassName]: imageClassName,
    });

    return (
      <div
        className={containerClass}
        style={style}
      >
        <div
          className={imageClass}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
      </div>
    );
  }
}

PreloadedImage.propTypes = propTypes;
PreloadedImage.defaultProps = defaultProps;
export default PreloadedImage;
