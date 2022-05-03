import React from 'react';
import './profile.scss';
import Me from '../../myself.jpg';

import PictureAndBlurb from './picture-and-blurb/picture-and-blurb.js';
import Socials from './socials/socials.js';
import Skills from '../skills/skills.js';
import Projects from '../projects/projects.js';


const Profile = () => {

  return (
    <div className='main-profile-div'>
      <PictureAndBlurb />

      <div className='skills-section'>
      <Skills />
      </div>

    </div>

  )
}

export default Profile;
