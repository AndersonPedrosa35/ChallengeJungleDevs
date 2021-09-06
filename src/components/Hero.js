import React from 'react';
import Login from '../assets/login.svg';
import Arrow from '../assets/arrow.svg';
import Header from './Header';

function Hero() {
  return (
    <section className="full-hero">
      <Header />
      <section className="hero">
        <div className="left-model">
          <h2 className='title-hero'>Create the childcare you need at a price you can afford</h2>
          <p className='paragraph-hero'>Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
        </div>
        <form className="right-model" onSubmit={(e) => e.preventDefault()}>
          <img src={ Login } width={ '50px' } alt="Login" />
          Sign In
          <label htmlFor="login" className="label">
            <input type="email" id="login" className="input" placeholder="E-mail" />
          </label>
          <label htmlFor="password" className="label">
            <input type="password" id="password" className="input" placeholder="Password" />
          </label>
          <label htmlFor="sigin" className="label">
            <button id="sigin" type='submit'>Submit</button>
          </label>
          <p className="label"> Or </p>
          <hr/>
          Sign Up
          <label htmlFor="name" className="label">
            <input type="text" id="name" className="input" placeholder="Name" />
          </label>
          <label htmlFor="email" className="label">
            <input type="email" id="login" className="input" placeholder="E-mail" />
          </label>
          <label htmlFor="newpass" className="label">
            <input type="password" id="password" className="input" placeholder="Password" />
          </label>
          <label htmlFor="sigup" className="label">
            <button type='sigup'>Submit</button>
          </label>
        </form>
      </section>
      <iframe 
        title="Down arrow"
        src={ Arrow }
        className="arrow"
        onClick={() => {''}}
      >
        <p>Seta para rolar para baixo</p>
      </iframe>
    </section>
  )
}

export default Hero;