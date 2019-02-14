import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PreloadedImage from './PreloadedImage';

import './PhotoStrip.scss';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class PhotoStrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };

    this.readyImageSrcs = new Set();
    this.onReady = this.onReady.bind(this);
  }

  onReady(src) {
    const { images } = this.props;

    this.readyImageSrcs.add(src);

    if (this.readyImageSrcs.size === images.length) {
      this.setState(() => ({ isReady: true }));
    }
  }

  render() {
    const { images, className } = this.props;
    const { isReady } = this.state;

    const photoStripClassName = classNames('photo-strip', {
      [className]: !!className,
      'photo-strip__hidden': !isReady,
    });

    return (
      <div className={photoStripClassName}>
        <div className="photo-strip__container">
          <div className="photo-strip__image_container">
            {images.map(image => (
              <PreloadedImage
                key={image}
                src={image}
                className="photo-strip__image"
                imageClassName="photo-strip__inner_image"
                onReady={this.onReady}
                useImg
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PhotoStrip.propTypes = propTypes;
PhotoStrip.defaultProps = defaultProps;
export default PhotoStrip;
