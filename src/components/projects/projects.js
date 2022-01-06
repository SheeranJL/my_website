import React from 'react';
import './projects.scss';

import ProjectDisplay from './project-display/project-display.js';

const Projects = () => {

  const projectPlacements = [
    {
        title: 'NSW Covid Testing Map',
        link: 'https://sheeranjl.github.io/maps-covid-info/',
        image: '/covid-testing.png',
        description: "This application helps you find a covid testing clinic on any day of the week."
    },
    {
        title: 'E-Commerse Store',
        link: 'https://sheeranjl.github.io/ecommerce-store/',
        image: "/ecom-store.png",
        description: "Mock design and functionallity of an e-commerce store."
    },
    {
        title: 'Task Tracking Application',
        link: 'https://sheeranjl.github.io/task-tracker-app/',
        image: "/to-do-app.png",
        description: "Create an account and track your to-do's and tasks."
    },
    {
        title: 'Gif Searching App',
        link: 'https://sheeranjl.github.io/project-gif-search/',
        image: "/gif-search-app.png",
        description: "Explore the vast ocean of gifs! Search and save gifs as you please."
    },
    {
        title: 'Nutrition Tracking App',
        link: 'https://sheeranjl.github.io/Nutrition_tracker_app/',
        image: "/nutrition-app.png",
        description: "Track your calorie intake among many thousands of different food options."
    },
    {
        title: 'Word Guessing Game',
        link: 'https://sheeranjl.github.io/word-guessing-game/',
        image: "/word-guessing-game.png",
        description: "A simple phrase guessing game."
    }
  ]

  console.log(projectPlacements);

  return (
    <div className='project-page-container'>

      <div className='project-page-blurb'>
        <h2>Projects</h2>
        <h3>Here's a collection of projects I have worked on so far. Click title to view live site.</h3>
      </div>


      <div className='project-item-container'>
        { projectPlacements.map((project, index) => <ProjectDisplay title={project.title} link={project.link} description={project.description} image={project.image}/>) }
      </div>


    </div>
  )

}

export default Projects;
