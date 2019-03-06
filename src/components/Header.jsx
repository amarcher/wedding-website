import React, { Component } from 'react';

import './Header.scss';

/* eslint-disable-next-line react/prefer-stateless-function */
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>Andy & Alicia</div>
        <div className="header__date">November 2, 2019</div>
      </header>
    );
  }
}

export default Header;
