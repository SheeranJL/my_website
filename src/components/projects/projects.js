import React, {useState} from 'react';
import './projects.scss';

//Import components//
import ProjectDisplay from './project-display/project-display.js';
import ProjectModal from './project-modal/project-modal.js';

const Projects = () => {

  const projectPlacements = [
    {
        title: 'Bitcoin Price Dashboard',
        link: 'https://sheeranjl.github.io/bitcoin_tracker/',
        image: "https://siasky.net/fAEWZ4Yb4e8cls7IalRmCjFaPbAcbuDzzmX2YlR3so7yMA",
        description: "Displays live Binance trades, big transfers, and greed/fear index"
    },
    {
        title: 'Chatroom',
        link: 'https://sheeranjl.github.io/chatroom-app/',
        image: 'https://i.ibb.co/85fqzk3/chatroom-app.png',
        description: "Open chatroom. Leave me a message!"
    },
    {
        title: 'NSW Covid Testing Map',
        link: 'https://sheeranjl.github.io/maps-covid-info/',
        image: 'https://i.ibb.co/x8bHWq4/covid-testing.png',
        description: "This application helps you find a covid testing clinic on any day of the week."
    },
    {
        title: 'E-Commerse Store',
        link: 'https://sheeranjl.github.io/ecommerce-store/',
        image: "https://i.ibb.co/YDXV2S5/ecom-store.png",
        description: "Mock design and functionallity of an e-commerce store."
    },
    {
        title: 'Task Tracking Application',
        link: 'https://sheeranjl.github.io/task-tracker-app/',
        image: "https://i.ibb.co/1vszbrG/to-do-app.png",
        description: "Create an account and track your to-do's and tasks."
    },
    {
        title: 'Gif Searching App',
        link: 'https://sheeranjl.github.io/project-gif-search/',
        image: "https://i.ibb.co/4ffHB4s/gif-search-app.png",
        description: "Explore the vast ocean of gifs! Search and save gifs as you please."
    },
    {
        title: 'Nutrition Tracking App',
        link: 'https://sheeranjl.github.io/Nutrition_tracker_app/',
        image: "https://i.ibb.co/kQGjdSp/nutrition-app.png",
        description: "Track your calorie intake among many thousands of different food options."
    },
    {
        title: 'Word Guessing Game',
        link: 'https://sheeranjl.github.io/word-guessing-game/',
        image: "https://i.ibb.co/pzLcrzJ/word-guessing-game.png",
        description: "A simple phrase guessing game."
    },
  ]

  const [displayModal, setDisplayModal] = useState(null)

  console.log(displayModal);

    return (

      <div className='project-page-container'>

        <div className='project-page-blurb'>
          <h2>Projects</h2>
          <h3>Some projects i've made include those below. Click for live site.</h3>
        </div>

        <div className='project-item-container'>
          { projectPlacements.map((project, index) => <ProjectDisplay title={project.title} link={project.link} description={project.description} image={project.image} setDisplayModal={setDisplayModal}/>) }
        </div>

        {
          displayModal
          ? (
            <div className='project-modal-container'>
              <ProjectModal setDisplayModal={setDisplayModal} data={displayModal}/>
            </div>
          ) : (
            null
          )

        }
      </div>
    )

}

export default Projects;
