import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

/* eslint-disable-next-line react/prefer-stateless-function */
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="nav__content">
          <ul>
            <li className="nav__list-item"><NavLink to="/" exact>Home</NavLink></li>
            <li className="nav__list-item"><NavLink to="/about">Wedding</NavLink></li>
            <li className="nav__list-item"><NavLink to="/topics">Location</NavLink></li>
          </ul>
        </nav>
        <div className="nav__spacer" />
      </div>
    );
  }
}

export default Nav;
