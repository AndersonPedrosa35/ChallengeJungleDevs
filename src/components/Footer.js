import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container-nav">
      <nav className='nav'>
        <Link 
          className="link"
          to="/create"
          >
            Share Your Nanny
          </Link>
        <Link
          className="link"
          to="/story"
        >
          Our story
        </Link>
        <Link
          className="link"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="link"
          to="/terms"  
        >
          Terms & Privacy
        </Link>
      </nav>
      <nav>
      <a
        className="icon"
        href="http://www.facebook.com"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        className="icon"
        href="http://www.instagram.com"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        className="icon"
        href="http://www.youtube.com"
      >
        <i className="fab fa-youtube"></i>
      </a>
      </nav>
    </footer>
  )
}
