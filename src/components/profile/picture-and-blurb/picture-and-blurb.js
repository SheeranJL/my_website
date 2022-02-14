import React from 'react';
import './picture-and-blurb.scss';
import Me from '../../../myself.jpg';

import Socials from '../socials/socials.js'

const PictureAndBlurb = () => {

  return (
    <div className='profile-container'>

      <div className='line' />

      <div className='profile-blurb'>
        <h2>Hi there, my name is Lewis.</h2>
        <p> I love creating websites and web applications. I have a web-development certificate from an online course provider called Treehouse but Google has been my primary teacher and mentor for the most part. I love coding and do so often in my spare time (probably too much). </p>
        <p> My focus has been on creating applications and UI's using the React framework but I also have experience using NodeJS to create and consume Websockets and RESTful API's. I'm open to other frameworks, or just using vanilla JS; whatever's required I will thoroughly learn and implement.</p>
        <Socials />
      </div>

      <div className='picture-container'>
        <img className='profile-image' src={Me} alt='picture of Lewis Sheeran' />
      </div>

    </div>
  )
}

export default PictureAndBlurb;
