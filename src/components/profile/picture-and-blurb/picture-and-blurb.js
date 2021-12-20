import React from 'react';
import './picture-and-blurb.scss';
import Me from '../../../myself.jpg';
import ReactLogo from '../../../react-logo.svg';

const PictureAndBlurb = () => {

  return (
    <div className='profile-container'>

      <div className='line' />

      <div className='profile-blurb'>
        <h2>Hi there, my name is Lewis. I'm an aspiring web-developer.</h2>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>


      <div className='picture-container'>
        <img className='profile-image' src={Me} />
      </div>

    </div>
  )
}

export default PictureAndBlurb;
