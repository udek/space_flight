import React from 'react';
import NavLink from './NavLink';
import '../styles/header.scss';

import Logo from '../assets/planet.png';

const Header = () => (
  <div id="header-container">
    <div className="header-col">
      <img src={Logo} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <NavLink />
  </div>
);

export default Header;
