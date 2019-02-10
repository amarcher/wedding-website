import React, { Component } from 'react';

import PhotoStrip from '../components/PhotoStrip';

import LazyBear from '../photos/LazyBear.jpg';
import JensensWedding from '../photos/JensensWedding.jpg';
import Hawaii from '../photos/Hawaii.jpg';
import Seattle from '../photos/Seattle.jpg';
import MonkeyForest from '../photos/MonkeyForest.jpg';
import ClintsWedding from '../photos/ClintsWedding.jpg';
import RhodeIsland from '../photos/RhodeIsland.jpg';
import MontanaFishing from '../photos/MontanaFishing.jpg';
import CookingInRhodeIsland from '../photos/CookingInRhodeIsland.jpg';
import HikingMarin from '../photos/HikingMarin.jpg';
import Rooftop from '../photos/Rooftop.jpg';
import SanDiegoBeachHike from '../photos/SanDiegoBeachHike.jpg';
import SoCalSaintsGame from '../photos/SoCalSaintsGame.jpg';

// import { XMAS_IN_RI } from '../photos/index';
// import BAY_BRIDGE from '../photos/bay_bridge.jpeg';
// import BAKER_BEACH_CLOSEUP from '../photos/baker_beach_closeup.jpg';
// import BAKER_BEACH from '../photos/baker_beach.jpg';

// const layers = [{
//   image: BAKER_BEACH,
//   expanded: true,
//   amount: 0.2,
//   slowerScrollRate: false,
// }];

const photoStripImages = [
  LazyBear,
  JensensWedding,
  Hawaii,
  Seattle,
  MonkeyForest,
  ClintsWedding,
  RhodeIsland,
  MontanaFishing,
  CookingInRhodeIsland,
  HikingMarin,
  Rooftop,
  SanDiegoBeachHike,
  SoCalSaintsGame,
];

/* eslint-disable-next-line react/prefer-stateless-function */
class OurStory extends Component {
  render() {
    return (
      <div className="our-story">
        <PhotoStrip images={photoStripImages} />
      </div>
    );
  }
}

export default OurStory;
