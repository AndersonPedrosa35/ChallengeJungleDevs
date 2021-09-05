import React from 'react';
import Login from '../assets/login.svg';
import Header from './Header';
import '../styles/Home.css';

function Hero() {
  return (
    <section className="full-hero">
      <Header />
    <section className="hero">
      <div className="left-model">
      <h1 className='title-hero'>Create the childcare you need at a price you can afford</h1>
      <p className='paragraph-hero'>Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
      </div>
      <form className="right-model">
        <img src={ Login } width={ '50px' } alt="Login" />
        Sign In
        <label htmlFor="login" className="label">
          <input id="login" className="input" placeholder="E-mail" />
        </label>
        <label htmlFor="password" className="label">
          <input id="password" className="input" placeholder="Password" />
        </label>
        <p className="label"> Or </p>
        <hr/>
        Sign Up
        <label htmlFor="name" className="label">
          <input id="name" className="input" placeholder="Name" />
        </label>
        <label htmlFor="email" className="label">
          <input id="login" className="input" placeholder="E-mail" />
        </label>
        <label htmlFor="newpass" className="label">
          <input id="password" className="input" placeholder="Password" />
        </label>
      </form>
    </section>
    </section>
  )
}

export default Hero;