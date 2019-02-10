import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './PreloadedImage.scss';

const propTypes = {
  src: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
  style: {},
};

class PreloadedImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      src: undefined,
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
    const { src } = this.props;

    this.setState(() => ({
      loaded: true,
      src: `url(${src})`,
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
    const { className, style } = this.props;
    const { src, loaded } = this.state;

    const imageClass = classNames('preloaded-image', {
      'preloaded-image__preloading': !loaded,
    });

    const containerClass = classNames('preloaded-image__container', {
      [className]: !!className,
    });

    return (
      <div
        className={containerClass}
        style={style}
      >
        <div
          className={imageClass}
          style={{
            backgroundImage: src,
          }}
        />
      </div>
    );
  }
}

PreloadedImage.propTypes = propTypes;
PreloadedImage.defaultProps = defaultProps;
export default PreloadedImage;
