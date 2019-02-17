import React, { Component } from 'react';

import PhotoStrip from '../components/PhotoStrip';
import './OurStory.scss';

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


/* eslint-disable-next-line react/prefer-stateless-function */
class OurStory extends Component {
  render() {
    return (
      <div className="our-story">
        <div className="our-story__film">
          <PhotoStrip images={photoStripImages2} />
        </div>
        <div className="our-story__film">
          <PhotoStrip images={photoStripImages} />
        </div>
        <div className="our-story__film">
          <PhotoStrip images={photoStripImages3} />
        </div>
        <div className="our-story__film">
          <PhotoStrip images={photoStripImages4} />
        </div>
      </div>
    );
  }
}

export default OurStory;
