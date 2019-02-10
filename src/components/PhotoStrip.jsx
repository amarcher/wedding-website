import React from 'react';
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

function PhotoStrip({ images, className }) {
  const photoStripClassName = classNames('photo-strip', {
    [className]: !!className,
  });

  return (
    <div className={photoStripClassName}>
      <div className="photo-strip__container">
        <div className="photo-strip__image_container">
          {images.map(image => (
            <PreloadedImage
              src={image}
              className="photo-strip__image"
              imageClassName="photo-strip__inner_image"
              useImg
            />
          ))}
        </div>
      </div>
    </div>
  );
}

PhotoStrip.propTypes = propTypes;
PhotoStrip.defaultProps = defaultProps;
export default PhotoStrip;
