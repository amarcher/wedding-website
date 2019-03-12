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

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInteractive: false,
    };

    this.setInteractive = this.setInteractive.bind(this);
  }

  setInteractive() {
    this.setState(() => ({
      isInteractive: true,
    }));
  }

  render() {
    const {
      className,
      iframeClassName,
      title,
      onReady,
      url,
    } = this.props;
    const { isInteractive } = this.state;

    const googleMapClassName = classNames('google-map', {
      [className]: !!className,
    });

    const frameClassName = classNames('google-map__iframe', {
      [iframeClassName]: !!iframeClassName,
    });

    const pointerEvents = isInteractive ? 'auto' : 'none';

    return (
      <div
        className={googleMapClassName}
        onClick={this.setInteractive}
        onKeyPress={this.setInteractive}
        role="button"
        tabIndex={0}
      >
        <PreloadedFrame
          className={frameClassName}
          title={title}
          src={url}
          onReady={onReady}
          style={{ pointerEvents }}
        />
      </div>
    );
  }
}

GoogleMap.propTypes = propTypes;
GoogleMap.defaultProps = defaultProps;
export default GoogleMap;
