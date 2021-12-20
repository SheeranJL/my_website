import React from 'react';
import './profile.scss';
import Me from '../../myself.jpg';

import PictureAndBlurb from './picture-and-blurb/picture-and-blurb.js';
import Socials from './socials/socials.js';


const Profile = () => {

  return (
    <div>
      <PictureAndBlurb />
      <Socials />
    </div>

  )
}

export default Profile;
