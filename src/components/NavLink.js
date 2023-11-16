import React from 'react';
import NavMenuItem from './NavMenuItem';

const NavLink = () => (
  <ul id="nav-link">
    <NavMenuItem to="./">Rockets</NavMenuItem>
    <NavMenuItem to="/mission">Mission</NavMenuItem>
    <NavMenuItem to="/myprofile">My Profile</NavMenuItem>
  </ul>
);

export default NavLink;
