import React from 'react';
import './project-display.scss';

const ProjectDisplay = ({project}) => {

  console.log(project)

  return (
    <div className='project-item'>
      <span className='project-title'>{project.title}</span>
    </div>
  )
}

export default ProjectDisplay;
