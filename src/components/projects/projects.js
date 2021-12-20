import React from 'react';
import './projects.scss';

import ProjectDisplay from './project-display/project-display.js';

const Projects = () => {

  const projectPlacements = [
    {
        title: 'Word Guessing Game',
        link: 'https://github.com/SheeranJL?tab=repositories'
    },
    {
        title: 'Nutrition Tracking App',
        link: 'https://github.com/SheeranJL?tab=repositories'
    },
    {
        title: 'E-Commerse Store',
        link: 'https://github.com/SheeranJL?tab=repositories'
    },
    {
        title: 'Gif Searching App',
        link: 'https://github.com/SheeranJL?tab=repositories'
    },
    {
        title: 'To-Do application',
        link: 'https://github.com/SheeranJL?tab=repositories'
    },
    {
        title: 'TBA',
        link: 'https://github.com/SheeranJL?tab=repositories'
    }
  ]

  console.log(projectPlacements);

  return (
    <div className='project-page-container'>

      <div className='project-page-blurb'>
        <h2>Examples of my projects</h2>
      </div>

      <div className='project-item-container'>
        { projectPlacements.map((project, index) => <ProjectDisplay project={project} />) }
      </div>


    </div>
  )

}

export default Projects;
