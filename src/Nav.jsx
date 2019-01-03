import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Nav.css';

const propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

const defaultProps = {
  match: {},
};

/* eslint-disable-next-line react/prefer-stateless-function */
class Nav extends Component {
  render() {
    const { match: { url } } = this.props;

    return (
      <div className="nav">
        <nav className="nav__content">
          <ul>
            <li className="nav__list-item"><Link to={`${url || ''}/`}>Home</Link></li>
            <li className="nav__list-item"><Link to={`${url || ''}/about`}>About</Link></li>
            <li className="nav__list-item"><Link to={`${url || ''}/topics`}>Topics</Link></li>
          </ul>
        </nav>
        <div className="nav__spacer" />
      </div>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
