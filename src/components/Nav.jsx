import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <nav className="nav__content">
        <ul className="nav__list">
          <li className="nav__list-item"><NavLink to="/" exact>Our Story</NavLink></li>
          <li className="nav__list-item"><NavLink to="/event-details">Event Details</NavLink></li>
          <li className="nav__list-item"><NavLink to="/wedding-party">Wedding Party</NavLink></li>
          <li className="nav__list-item"><NavLink to="/accommodations">Accommodations</NavLink></li>
          <li className="nav__list-item"><NavLink to="/registry">Registry</NavLink></li>
          <li className="nav__list-item"><NavLink to="/rsvp">RSVP</NavLink></li>
        </ul>
      </nav>
      <div className="nav__spacer" />
    </div>
  );
}

export default Nav;
