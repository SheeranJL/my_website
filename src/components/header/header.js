import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {

  return (
    <ul className='header-container'>
      <Link to='/' className='initials'>L.S</Link>
      <Link to='/skills' className='header-item'>Skills</Link>
      <Link to='/projects' className='header-item'>Projects</Link>
      <Link to='/contact' className='header-item'>Contact</Link>
    </ul>
  )
}

export default Header;
