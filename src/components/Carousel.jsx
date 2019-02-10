import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Chevron from './Chevron';
import PreloadedImage from './PreloadedImage';

import './Carousel.scss';

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      width: 0,
      height: 0,
    };

    this.slideForward = this.slideForward.bind(this);
    this.slideBackward = this.slideBackward.bind(this);
  }

  componentDidMount() {
    if (this.ref) {
      const { height, width } = this.ref.getBoundingClientRect();
      this.setState(() => ({
        width,
        height,
      }));
    }
  }

  slide(forward = true) {
    const { images } = this.props;
    const increment = forward ? 1 : -1;

    this.setState(({ activeIndex }) => ({
      activeIndex: Math.min(Math.max(activeIndex + increment, 0), images.length - 1),
    }));
  }

  slideForward() {
    this.slide(true);
  }

  slideBackward() {
    this.slide(false);
  }

  renderImages() {
    const { images } = this.props;
    const { height, width } = this.state;

    const style = {
      height,
      width,
    };

    return images.map(image => (
      <PreloadedImage src={image} key={image} className="carousel__image" style={style} />
    ));
  }

  renderArrows() {
    const { images } = this.props;
    const { activeIndex } = this.state;

    if (images.length <= 1) return null;

    return (
      <div className="carousel__arrows">
        <button type="button" className="carousel__arrow_left" onClick={this.slideBackward} disabled={!activeIndex}>
          <Chevron direction="left" />
        </button>
        <button type="button" className="carousel__arrow_left" onClick={this.slideForward} disabled={activeIndex === images.length - 1}>
          <Chevron direction="right" />
        </button>
      </div>
    );
  }

  render() {
    const { className } = this.props;
    const { activeIndex, width } = this.state;

    const style = {
      transform: `translateX(${-activeIndex * width}px)`,
    };

    const carouselClassName = classNames('carousel', {
      [className]: !!className,
    });

    return (
      <div className={carouselClassName} ref={(ref) => { this.ref = ref; }}>
        <div className="carousel__images" style={style}>
          {this.renderImages()}
        </div>
        {this.renderArrows()}
      </div>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
export default Carousel;
