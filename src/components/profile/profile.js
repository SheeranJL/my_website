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

      <div className='bottom-blurb'>
        <h3>I look forward to helping you on your next project</h3>
        <h4>Get in touch!</h4>
        <p className='contact-info'>lewisjsheeran@protonmail.com | 0450 700 182</p>
      </div>



    </div>

  )
}

export default Profile;
