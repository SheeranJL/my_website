import React from 'react';
import './skills.scss';
import ReactLogo from '../../react-logo.svg';

const Skills = () => {

  return (

    <div className='skills-page-container'>

    <p className='skills-page-blurb'> My greatest strengths lie in the following languages, tools, and frameworks; but I am always learning new skills and improving on current.</p>

    <div className='logo-container'>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png' />
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' />
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' />
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
        <img className='logo' src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' />
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg' />
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' />
     </div>
    </div>
  )
}

export default Skills;
