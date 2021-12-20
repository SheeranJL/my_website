import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './app.scss';

//components//
import Header from './components/header/header.js';
import Profile from './components/profile/profile.js';
import Projects from './components/projects/projects.js';
import Skills from './components/skills/skills.js'

const App = () => {

  return (
    <div className='app-container'>
      <Router>
          <Header />
        <Switch>
          <Route exact path='/' component={Profile} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
        </Switch>
      </Router>
    </div>
  )


}

export default App;
