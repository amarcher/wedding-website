import React, { Component } from 'react';
import classNames from 'classnames';

import PhotoStrip from '../components/PhotoStrip';
import Story from '../components/Story';
import GoogleMap from '../components/GoogleMap';

import LazyBear from '../photos/LazyBear.jpg';
import JensensWedding from '../photos/JensensWedding.jpg';
import Hawaii from '../photos/Hawaii.jpg';
import Seattle from '../photos/Seattle.jpg';
import MonkeyForest from '../photos/MonkeyForest.jpg';
import MonkeyForest2 from '../photos/MonkeyForest2.jpg';
import ClintsWedding from '../photos/ClintsWedding.jpg';
import RhodeIsland from '../photos/RhodeIsland.jpg';
import MontanaFishing from '../photos/MontanaFishing.jpg';
import CookingInRhodeIsland from '../photos/CookingInRhodeIsland.jpg';
import HikingMarin from '../photos/HikingMarin.jpg';
import Rooftop from '../photos/Rooftop.jpg';
import SanDiegoBeachHike from '../photos/SanDiegoBeachHike.jpg';
import SoCalSaintsGame from '../photos/SoCalSaintsGame.jpg';
import AndrewsHoney from '../photos/AndrewsHoney.jpg';
import SlackHolidayParty from '../photos/SlackHolidayParty.jpg';
import VancouverPinkAlley from '../photos/VancouverPinkAlley.jpg';
import SaintsGame from '../photos/SaintsGame.jpg';
import { ourStory as paragraphs } from '../content';

import './OurStory.scss';


const photoStripImages = [
  LazyBear,
  JensensWedding,
  Hawaii,
  Seattle,
  MonkeyForest,
];

const photoStripImages2 = [
  ClintsWedding,
  RhodeIsland,
  MontanaFishing,
  CookingInRhodeIsland,
];

const photoStripImages3 = [
  HikingMarin,
  Rooftop,
  SanDiegoBeachHike,
  SoCalSaintsGame,
];

const photoStripImages4 = [
  MonkeyForest2,
  AndrewsHoney,
  SlackHolidayParty,
  SaintsGame,
  VancouverPinkAlley,
];


class OurStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };

    this.onReady = this.onReady.bind(this);
  }

  onReady() {
    this.setState(() => ({
      isLoaded: true,
    }));
  }

  render() {
    const { isLoaded } = this.state;

    const storyClassName = classNames('our-story__story', {
      'our-story__story__preloading': !isLoaded,
    });

    return (
      <div className="our-story">
        <div className="our-story__film_section">
          <div className="our-story__film">
            <PhotoStrip images={photoStripImages2} />
          </div>
          <div className="our-story__film">
            <PhotoStrip images={photoStripImages} />
          </div>
          <div className={storyClassName}>
            <GoogleMap
              title="Our Story"
              url="https://www.google.com/maps/d/embed?mid=1BTNXvivqUUbnNUysytKguoUjgIYhbCU0"
              onReady={this.onReady}
            />
            <Story paragraphs={paragraphs} />
          </div>
          <div className="our-story__film">
            <PhotoStrip images={photoStripImages3} />
          </div>
          <div className="our-story__film">
            <PhotoStrip images={photoStripImages4} />
          </div>
        </div>
      </div>
    );
  }
}

export default OurStory;
