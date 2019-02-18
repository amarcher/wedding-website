import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PreloadedFrame from './PreloadedFrame';

import './GoogleMap.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onReady: PropTypes.func,
  className: PropTypes.string,
  iframeClassName: PropTypes.string,
};

const defaultProps = {
  onReady: undefined,
  className: '',
  iframeClassName: '',
};

function GoogleMap({
  className,
  iframeClassName,
  title,
  onReady,
  url,
}) {
  const googleMapClassName = classNames('google-map', {
    [className]: !!className,
  });

  const frameClassName = classNames('google-map__iframe', {
    [iframeClassName]: !!iframeClassName,
  });

  return (
    <div
      className={googleMapClassName}
    >
      <PreloadedFrame
        className={frameClassName}
        title={title}
        src={url}
        onReady={onReady}
      />
    </div>
  );
}

GoogleMap.propTypes = propTypes;
GoogleMap.defaultProps = defaultProps;
export default GoogleMap;
