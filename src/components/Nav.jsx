import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="nav__content">
          <ul>
            <li className="nav__list-item"><NavLink to="/" exact>Our Story</NavLink></li>
            <li className="nav__list-item"><NavLink to="/event-details">Event Details</NavLink></li>
            <li className="nav__list-item"><NavLink to="/wedding-party">Wedding Party</NavLink></li>
            <li className="nav__list-item"><NavLink to="/accommodations">Accommodations</NavLink></li>
          </ul>
        </nav>
        <div className="nav__spacer" />
      </div>
    );
  }
}

export default Nav;
