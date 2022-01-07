import React, {useState, useEffect} from 'react';
import {Link, useHistory, useLocation, useParams} from 'react-router-dom';
import './header.scss';

const Header = ({toggle}) => {

  const location = useLocation();

  return (
    <ul className='header-container'>
      <Link to='/' className='initials'>L.S</Link>
      <div className='right-side-header'>
        {
          location.pathname === '/' ? <Link to='/projects' className='header-item'>Projects</Link> : <Link to='/' className='header-item'>Home</Link>
        }
        <a className='header-item resume' href='https://siasky.net/XAF2bYvogkfrWddm3HjZcBi-BXdo00DnA8fNyXzMAhPA1w'>Resume</a>
      </div>
    </ul>
  )
}

export default Header;
