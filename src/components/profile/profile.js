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

      <div className='bottom-blurb'>
        <h3>I look forward to helping you on your next project</h3>
        <h4>Get in touch!</h4>
        <p>Email etc here</p>
      </div>

    </div>

  )
}

export default Profile;
