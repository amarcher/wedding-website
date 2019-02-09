import React from 'react';
import ProfileCard from '../components/ProfileCard';

import './WeddingParty.scss';
import { bridesmaids, groomsmen } from '../content';

function WeddingParty() {
  const bridesmaidsCards = bridesmaids.map(bridesmaid => (
    <ProfileCard title="Bridesmaid" {...bridesmaid} key={bridesmaid.name} />
  ));

  const groomsmenCards = groomsmen.map(groomsman => (
    <ProfileCard title="Groomsman" {...groomsman} key={groomsman.name} />
  ));

  return (
    <div className="wedding-party">
      <h1>Bridesmaids</h1>
      <div className="wedding-party__bridesmaids">
        {bridesmaidsCards}
      </div>
      <h1>Groomsmen</h1>
      <div className="wedding-party__groomsmen">
        {groomsmenCards}
      </div>
    </div>
  );
}

export default WeddingParty;
