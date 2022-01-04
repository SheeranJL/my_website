import React from 'react';
import './picture-and-blurb.scss';
import Me from '../../../myself.jpg';

import Socials from '../socials/socials.js'

const PictureAndBlurb = () => {

  return (
    <div className='profile-container'>

      <div className='line' />

      <div className='profile-blurb'>
        <h2>Hi there, my name is Lewis. I'm an aspiring web-developer.</h2>
        <p>Obsessed with the way in which websites and applications can be built to help people and businesses do their best work.</p>
        <p>What started initially as a hobby has transformed into a deep passion for creating high quality, easy to use and assessible web applications.</p>
        <Socials />
      </div>

      <div className='picture-container'>
        <img className='profile-image' src={Me} />
      </div>

    </div>
  )
}

export default PictureAndBlurb;
