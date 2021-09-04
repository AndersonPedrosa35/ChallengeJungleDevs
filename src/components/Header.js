import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav className='nav-header'>
        <Link className='link'>Create Your Nanny Share</Link>
        <Link className='link'>Browse Shares</Link>
        <Link className='link'>Our Story</Link>
      </nav>
    </header>
  )
}

export default Header;