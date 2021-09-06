import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <hr className="separator"/>
      <section className="market">
        <h2>Are you a parent without a nanny and looking to share?</h2>
        <p>Leave us your name and email and we’ll 
          update you as soon as a share becomes available in your area!</p>
      </section>
    </div>
  )
}
