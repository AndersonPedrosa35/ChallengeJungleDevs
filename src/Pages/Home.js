import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

function Home() {
  return (
    <section className="hero">
      <Header />
      <h1 className='title-hero'>Create the childcare you need at a price you can afford</h1>
      <p className='paragraph-hero'>Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
    </section>
  )
}

export default Home;