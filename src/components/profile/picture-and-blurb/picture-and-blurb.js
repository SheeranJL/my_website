import React from 'react';
import './picture-and-blurb.scss';
import Me from '../../../myself.jpg';

import Socials from '../socials/socials.js'

const PictureAndBlurb = () => {

  return (
    <div className='profile-container'>

      <div className='line' />

      <div className='profile-blurb'>
        <h2>Hi there, my name is Lewis. Aspiring web-developer.</h2>
        <p> I have a deep passion for creating websites and web applications. Primarily self-taught with the help of online bootcamps like Treehouse. I love coding and do so often in my spare time. </p>
        <p> My focus is primarily creating applications and UI's using the React framework but I'm open to other frameworks, or just using vanilla JS; whatever the task requires I will learn & utilise the best tool deemed fit.</p>
        <Socials />
      </div>

      <div className='picture-container'>
        <img className='profile-image' src={Me} />
      </div>

    </div>
  )
}

export default PictureAndBlurb;
