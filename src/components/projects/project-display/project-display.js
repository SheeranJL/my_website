import React from 'react';
import './project-display.scss';

const ProjectDisplay = ({link, title, description, image, setDisplayModal, blurb, stack, modalImage}) => {

  const backgroundImage = {
    backgroundImage: `url(${image})`,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  const triggerInfoModal = () => {
    setDisplayModal({
      link,
      title,
      description,
      image,
      blurb,
      stack,
      modalImage
    })
  }

  return (


    <div className='each-project-container'>

        <div className='upper-container' style={backgroundImage}>

          <a href={link} className='project-title'>{title}</a>
        </div>

        <div className='lower-container'>
          <p>{description}</p>
        </div>

        <div className='information-symbol' onClick={() => triggerInfoModal()}>
          <span>&#x2139;</span>
        </div>

    </div>
  )
}

export default ProjectDisplay;
