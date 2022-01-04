import React from 'react';
import './projects.scss';

import ProjectDisplay from './project-display/project-display.js';

const Projects = () => {

  const projectPlacements = [
    {
        title: 'Word Guessing Game',
        link: 'https://sheeranjl.github.io/word-guessing-game/',
        image: "/word-guessing-game.png",
        description: "You have only 60 seconds and three lives to guess the phrase correctly. Will you succeed?"
    },
    {
        title: 'Nutrition Tracking App',
        link: 'https://sheeranjl.github.io/Nutrition_tracker_app/',
        image: "/nutrition-app.png",
        description: "Track your calorie intake among many thousands of different food options."
    },
    {
        title: 'E-Commerse Store',
        link: 'https://github.com/SheeranJL?tab=repositories',
        description: "Mock design and functionallity of an e-commerce store"
    },
    {
        title: 'Gif Searching App',
        link: 'https://sheeranjl.github.io/project-gif-search/',
        image: "/gif-search-app.png",
        description: "Explore the vast ocean of gifs! Search and save gifs as you please."
    },
    {
        title: 'Task tracking application',
        link: 'https://sheeranjl.github.io/task-tracker-app/',
        image: "/to-do-app.png",
        description: "Track the tasks you don't want to forget about using this little application! Log in to save them against your profile."
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
        <h2>Projects</h2>
        <h3>Here's a collection of projects I have worked on so far. All code is my own without tutorials.</h3>
      </div>


      <div className='project-item-container'>
        { projectPlacements.map((project, index) => <ProjectDisplay title={project.title} link={project.link} description={project.description} image={project.image}/>) }
      </div>


    </div>
  )

}

export default Projects;
