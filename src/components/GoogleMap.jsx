import React from 'react';
import PropTypes from 'prop-types';

import PreloadedFrame from './PreloadedFrame';

import './GoogleMap.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onReady: PropTypes.func,
};

const defaultProps = {
  onReady: undefined,
};

function GoogleMap({
  title,
  onReady,
  url,
}) {
  return (
    <div
      className="google-map"
    >
      <PreloadedFrame
        className="google-map__iframe"
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
