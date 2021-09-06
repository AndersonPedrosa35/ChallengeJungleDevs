import React from 'react';
import About from '../components/About';
import Framework from '../components/Framework';
import Hero from '../components/Hero';
import Market from '../components/Market';
import Prices from '../components/Prices';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <hr className="separator"/>
      <Market />
      <hr className="separator"/>
      <Prices />
      <hr className="separator"/>
      <Framework />
      <hr className="separator"/>
    </div>
  )
}
