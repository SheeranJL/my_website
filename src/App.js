import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './app.scss';

//components//
import Header from './components/header/header.js';
import Profile from './components/profile/profile.js';
import Projects from './components/projects/projects.js';
import Skills from './components/skills/skills.js'
import ContactModal from './components/contact-modal/contact-modal.js';

const App = () => {

  const [toggleModal, setToggleModal] = useState(false)

  return (
    <div className='app-container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Header setToggleModal={setToggleModal} toggle={toggleModal}/>

        <Switch>
          <Route exact path='/' component={Profile} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
          <Route component={Profile} />
        </Switch>

      </Router>
    </div>
  )


}

export default App;
