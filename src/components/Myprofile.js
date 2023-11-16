import React from 'react';
import ProfileRocket from './ProfileRockets';
import ProfiledMission from './ProfiledMission';
import '../styles/myprofile.scss';

const Myprofile = () => (
  <div id="myprofile">
    <ProfiledMission />
    <ProfileRocket />
  </div>
);

export default Myprofile;
