import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-nav">
      <nav className="nav">
        <Link
          className="link"
          to="/create"
        >
          Create Your Nanny Share
        </Link>
        <Link 
          className="link"
          to="/browse-shares"
          >
            Browse Shares
          </Link>
        <Link 
          className="link"
          to="/story"
          >
            Our Story
          </Link>
      </nav>
    </header>
  )
}

export default Header;