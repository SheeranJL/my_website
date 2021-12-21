import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = ({setToggleModal, toggle}) => {

  return (
    <ul className='header-container'>
      <Link to='/' className='initials'>L.S</Link>
      <Link to='/skills' className='header-item'>Skills</Link>
      <Link to='/projects' className='header-item'>Projects</Link>
      <span onClick={() => setToggleModal(!toggle)} to='/contact' className='header-item'>Contact</span>
    </ul>
  )
}

export default Header;
