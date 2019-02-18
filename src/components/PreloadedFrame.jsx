import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PreloadedFrame.scss';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onReady: PropTypes.func,
};

const defaultProps = {
  className: '',
  onReady: () => {},
};

class PreloadedFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.setLoaded = this.setLoaded.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.iframe.addEventListener('load', this.setLoaded);
  }

  componentWillUnmount() {
    if (this.iframe) {
      this.iframe.removeEventListener('load', this.setLoaded);
      this.iframe = undefined;
    }
  }

  setRef(ref) {
    this.iframe = ref;
  }

  setLoaded() {
    const { onReady, src } = this.props;

    this.setState(() => ({
      loaded: true,
    }), () => onReady(src));

    if (this.iframe) {
      this.iframe.removeEventListener('load', this.setLoaded);
      this.iframe = undefined;
    }
  }

  render() {
    const {
      className,
      title,
      src,
    } = this.props;
    const { loaded } = this.state;

    const iframeClassName = classNames('preloaded-frame', {
      'preloaded-frame__preloading': !loaded,
      [className]: !!className,
    });

    return (
      <iframe
        className={iframeClassName}
        ref={this.setRef}
        frameBorder="0"
        title={title}
        src={src}
      />
    );
  }
}

PreloadedFrame.propTypes = propTypes;
PreloadedFrame.defaultProps = defaultProps;
export default PreloadedFrame;
