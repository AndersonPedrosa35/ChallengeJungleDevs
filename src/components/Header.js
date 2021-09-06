import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-nav">
      <nav className='nav'>
        <Link className='link'>Create Your Nanny Share</Link>
        <Link className='link'>Browse Shares</Link>
        <Link className='link'>Our Story</Link>
      </nav>
    </header>
  )
}

export default Header;