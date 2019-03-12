import React from 'react';

import ProfileCard from '../components/ProfileCard';
import PreloadedImage from '../components/PreloadedImage';

import TinderIcon from '../photos/TinderIcon.png';
import { bridesmaids, groomsmen } from '../content';

import './WeddingParty.scss';

function WeddingParty() {
  const bridesmaidsCards = bridesmaids.map(bridesmaid => (
    <ProfileCard title="Bridesmaid" {...bridesmaid} key={bridesmaid.name} />
  ));

  const groomsmenCards = groomsmen.map(groomsman => (
    <ProfileCard title="Groomsman" {...groomsman} key={groomsman.name} />
  ));

  const tinderIcon = (
    <PreloadedImage
      className="wedding-party__tinder_logo"
      imageClassName="wedding-party__tinder_image"
      src={TinderIcon}
    />
  );

  return (
    <div className="wedding-party">
      <h1 className="wedding-party__title">
        {tinderIcon}
        Bridesmaids
        {tinderIcon}
      </h1>
      <div className="wedding-party__bridesmaids">
        {bridesmaidsCards}
      </div>
      <h1 className="wedding-party__title">
        {tinderIcon}
        Groomsmen
        {tinderIcon}
      </h1>
      <div className="wedding-party__bridesmaids">
        {groomsmenCards}
      </div>
    </div>
  );
}

export default WeddingParty;
