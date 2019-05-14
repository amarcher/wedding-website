import React, { Component } from 'react';

import './Header.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>Andy & Alicia</div>
        <div className="header__date">
          <span className="header__month">November </span>
          <span className="header__day">2</span>
          <span className="header__year"> 2019</span>
        </div>
      </header>
    );
  }
}

export default Header;
