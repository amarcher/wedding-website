import React, { Component } from 'react';
import './Nav.css';

/* eslint-disable-next-line react/prefer-stateless-function */
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="nav__content">
          <ul>
            <li className="nav__list-item"><button type="button">Home</button></li>
            <li className="nav__list-item"><button type="button">About</button></li>
            <li className="nav__list-item"><button type="button">Contact</button></li>
          </ul>
        </nav>
        <div className="nav__spacer" />
      </div>
    );
  }
}

export default Nav;
