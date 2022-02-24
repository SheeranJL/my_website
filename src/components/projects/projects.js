import React, {useState} from 'react';
import './projects.scss';

//Import components//
import ProjectDisplay from './project-display/project-display.js';
import ProjectModal from './project-modal/project-modal.js';

//Import SVG's//
import {ReactComponent as Redux} from '../../images/redux-logo.svg';
import {ReactComponent as Sass} from '../../images/sass.svg';
import {ReactComponent as ReactLogo} from '../../images/react.svg';
import {ReactComponent as Javascript} from '../../images/javascript.svg';
import {ReactComponent as Firebase} from '../../images/firebase.svg';
import {ReactComponent as NodeJS} from '../../images/nodejs.svg';


const Projects = () => {

  const projectPlacements = [
    {
        title: 'Bitcoin Price Dashboard',
        link: 'https://bitcoindashy.com/',
        image: "https://siasky.net/3AAGDGjWYitVhxoPDaNO8tRjcP_dhdwYqq00BhDPgLP4Jw",
        modalImage: 'https://siasky.net/nAHGEmu4d8SMkYuCJiTCi6D6kebGhMMqLB3LbZT6pftbUg',
        description: "Displays live Binance trades, big transfers, and greed/fear index",
        blurb: "This dashboard gathers live and recent data from a myriad of different sources. Websockets are used for live trades and liquidations. I made my own API's and Websockets in NodeJS which combines several pieces of information gathered from multiple sources, manipulate that data on the back-end, and served it to my front-end using a single API call - I did this to conserve memory on the browser and avoid rate limiting. My front end uses Redux for state management and my back end is hosted on a private linux VPS on digital ocean.",
        stack: [ReactLogo, Javascript, Redux, NodeJS, Sass]
    },
    {
        title: 'Chatroom',
        link: 'https://sheeranjl.github.io/chatroom-app/',
        image: 'https://i.ibb.co/85fqzk3/chatroom-app.png',
        modalImage:'https://siasky.net/dADZetyzPtQYFvIafXK8aJosbG0-LgPOrdSu1Q1Lv11VQQ',
        description: "Open chatroom. Leave me a message!",
        blurb: 'This simple chatroom handles two-way real-time communication between multiple participants. Users can log in using either their Google account or by creating a new account via a registration form. All data is managed using Firebase/Firestore as my backend and app state is managed using React context API. Any users who are currently logged in will appear as active at the top of the page.',
        stack: [ReactLogo, Javascript, Sass, Firebase]
    },
    {
        title: 'NSW Covid Testing Map',
        link: 'https://sheeranjl.github.io/maps-covid-info/',
        image: 'https://i.ibb.co/x8bHWq4/covid-testing.png',
        modalImage: 'https://siasky.net/fAGOZvyplsuaqfFLixFtC5mLh7wBgNZp53z-vxw5JN2TBg',
        description: "This application helps you find a covid testing clinic on any day of the week.",
        blurb: 'A simple application to easily find and track covid testing clinics which are open on any given day using the Google Maps API and live NSW Health API data available on their developer portal. A filtering system is implemented to filter through the days of the week and whether or not a pre-booking is required. Markers are placed at each location and clicking on them will display all relevant information about the clinic including opening times (for each day), contact number and the booking website (if applicable).',
        stack: [ReactLogo, Javascript, Sass]
    },
    {
        title: 'E-Commerce Store',
        link: 'https://sheeranjl.github.io/ecommerce-store/',
        image: "https://i.ibb.co/YDXV2S5/ecom-store.png",
        modalImage: 'https://siasky.net/_AAlS37cgxP9Ejh4Doi3eBXl9Jw9gWwBE5-ylFg18s-mwQ',
        description: "Mock design and functionallity of an e-commerce store.",
        blurb: 'This is a mock website design for an online shopping store with full functionality. Users can sign in and add to their cart (or sign in at checkout), add/remove shopping items from their cart, and check out using their card details. Fake card details are listed on the checkout page for testing purposes (this is handled by Stripe). All items are stored within Firebase/Firestore along with user information and state is managed using React context API. Rather than saving checkout items in localstorage, all items are saved against the profile of a user which means the user can log out with cart items and still view them on another device.',
        stack: [ReactLogo, Javascript, Sass, Firebase ]
    },
    {
        title: 'Task Tracking Application',
        link: 'https://sheeranjl.github.io/task-tracker-app/',
        image: "https://i.ibb.co/1vszbrG/to-do-app.png",
        modalImage: 'https://siasky.net/BADn_JWZTqKKqhrbxh9Sv5TISnnYsBVojxco-K9mw6RSZA',
        description: "Create an account and track your to-do's and tasks.",
        blurb: 'A simple to-do application but I added more functionality to break the norm what would be considered a pretty common portfolio project. Users can log into their Google account to authenticate or register a new account using the registration form. Any tasks a user adds will be saved to Firebase/Firestore and will be available when the user next logs in. Functionality is added to demonstrate CRUD tasks including modifying an existing task, deleting a task. Tasks can be sorted by priority (which the user declares when creating a task), or by active status (whether a task is complete or not).',
        stack: [ReactLogo, Javascript, Sass, Firebase ]
    },
    {
        title: 'Gif Searching App',
        link: 'https://sheeranjl.github.io/project-gif-search/',
        image: "https://i.ibb.co/4ffHB4s/gif-search-app.png",
        modalImage: 'https://siasky.net/fAbhcnMzbF7wltcAQJKWvwiUJHa_qEqoOoiAIBgkVN4RRQ',
        description: "Explore the vast ocean of gifs! Search and save gifs as you please.",
        blurb: 'This simple application using the Giphy API and allows users to search a GIF of almost any topic. If a user likes what they see, they can save the task, but only if they have authenticated via their Google account or by registering a new account using the registration form. All data is saved against Firebase/Firestore which ensures a user can log back in at any time to view the Gifs they have previous saved. Users can also remove items from the saved list and this will update their profile on the backend.',
        stack: [ReactLogo, Javascript, Sass, Firebase ]
    },
    {
        title: 'Nutrition Tracking App',
        link: 'https://sheeranjl.github.io/Nutrition_tracker_app/',
        image: "https://i.ibb.co/kQGjdSp/nutrition-app.png",
        modalImage: 'https://siasky.net/OACnn9XRbQsjCeQa0rNrie_ia-RbQEAOGUKV6KTjUnyUMw',
        description: "Track your calorie intake among many thousands of different food options.",
        blurb: 'Using the Nutritionix API, a user can search for any foods and add it to their daily meal plan. This application will track the calories of each food selection and clearly indicate they current calorie spend vs the calories they have left on their budget. All data is saved using Firebase/Firestore as a backend including authentication',
        stack: [ReactLogo, Javascript, Sass, Firebase ]
    },
    {
        title: 'Word Guessing Game',
        link: 'https://sheeranjl.github.io/word-guessing-game/',
        image: "https://i.ibb.co/pzLcrzJ/word-guessing-game.png",
        modalImage: 'https://siasky.net/vAB_PVzoGPIk7owzTz0YMbh91SfA5p14uXXFKrPuoQx9VQ',
        description: "A simple phrase guessing game.",
        blurb: 'A simple game which tests a users ability to guess a random phrase within a window of sixty-seconds. Only three lives are afforded and each wrongly selected letter will take one life-heart away. For each letter selected, the game board will prevent the user from selecting that letter again.',
        stack: [ReactLogo, Javascript, Sass]
    },
    {
      title: 'Simple Math Quiz',
      link: 'https://SheeranJL.github.io/math_quiz',
      image: "https://siasky.net/IAAEDJ9CQQg3Rs5Iwzi2OQagHkuwP19nCBPE8m4I_pl3kQ",
      modalImage: 'https://siasky.net/IAAEDJ9CQQg3Rs5Iwzi2OQagHkuwP19nCBPE8m4I_pl3kQ',
      description: "A simple arithmetic quiz",
      blurb: 'A simple math quiz to train general arithmetic. Players only have sixty seconds to correctly answer as many questions as they can. There are three game modes; easy, medium, and hard. The application will first generate a random question based on the users input for game difficulty. One the page is rendered, the countdown will begin and once expired a "time over" modal will appear. Users may exit the current game and go back to select a new difficulty',
      stack: [ReactLogo, Javascript, Sass]
    }
  ]

  const [displayModal, setDisplayModal] = useState(null)

    return (

      <div className='project-page-container'>

        <div className='project-page-blurb'>
          <h2>Projects</h2>
          <h3>Some projects i've made include those below. Click name for live site.</h3>
        </div>

        <div className='project-item-container'>
          { projectPlacements.map((project, index) => <ProjectDisplay key={index} title={project.title} link={project.link} description={project.description} image={project.image} setDisplayModal={setDisplayModal} blurb={project.blurb} stack={project.stack} modalImage={project.modalImage}/>) }
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
