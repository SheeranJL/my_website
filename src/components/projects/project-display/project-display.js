import React from 'react';
import './project-display.scss';

const ProjectDisplay = ({link, title, description, image}) => {


  const backgroundImage = {
    backgroundImage: `url(${image})`,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }


  return (


    <div className='each-project-container'>

        <div className='upper-container' style={backgroundImage}>

          <a href={link} className='project-title'>{title}</a>
        </div>

        <div className='lower-container'>
          <p>{description}</p>
        </div>

    </div>
  )
}

export default ProjectDisplay;
