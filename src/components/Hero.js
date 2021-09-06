import React, { useState } from 'react';
import Login from '../assets/login.svg';
import Arrow from '../assets/arrow.svg';
import Header from './Header';

function Hero() {
  const [sigIn, setSigIn] = useState({
    email: '',
    password: ''
  });
  const [sigUp, setSigUp] = useState({
    name: '',
    email: '',
    password: '',
  })

  const SIZEMINIMO = 6;

  function postLogin(number) {
    if(number === 1) {
      return fetch(-'https://api.jungledevs.com/api/v1/challenge-newsletter/', {
        method: 'post',
        headers: '',
        body: JSON.stringify(sigIn),
      }).then((response) => response.json()).then((resolve) => console.log(resolve));
    }
    return fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
      method: 'post',
      headers: '',
      body: JSON.stringify(sigUp),
    }).then((response) => response.json()).then((resolve) => console.log(resolve));
  }

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
            <input 
              type="email" 
              id="login" 
              className="input" 
              placeholder="E-mail"
              onChange={({ target }) => setSigIn({...sigIn, email: target.value})}
            />
          </label>
          <label htmlFor="password" className="label">
            <input 
              type="password"
              id="password"
              className="input"
              placeholder="Password"
              onChange={ ({ target }) => setSigIn({...sigIn, password: target.value}) }
            />
          </label>
          <label htmlFor="sigin" className="label">
            <button
              id="sigin"
              type='submit'
              onClick={() => postLogin(1)}
              disabled={
                !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(sigIn.email)
              || sigIn.password.length <= SIZEMINIMO}
            >
              Submit
            </button>
          </label>
          <p className="label"> Or </p>
          <hr/>
          Sign Up
          <label htmlFor="name" className="label">
            <input
              type="text"
              id="name"
              className="input"
              placeholder="Name"
              onChange={({ target }) => setSigUp({ ...sigUp, name: target.value })}
            />
          </label>
          <label htmlFor="email" className="label">
            <input
              type="email"
              id="email"
              className="input"
              placeholder="E-mail"
              onChange={({ target }) => setSigUp({...sigUp, email: target.value})}
            />
          </label>
          <label htmlFor="newpass" className="label">
            <input
              type="password"
              id="newpass"
              className="input"
              placeholder="Password"
              onChange={({ target }) => setSigUp({...sigUp, password: target.value})}
            />
          </label>
          <label htmlFor="sigup" className="label">
            <button
              type='sigup'
              onClick={ () => postLogin(0)}
              disabled={
                !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(sigUp.email)
              || sigUp.password.length <= SIZEMINIMO}
            >
              Submit
            </button>
          </label>
        </form>
      </section>
      <iframe 
        title="Down arrow"
        src={ Arrow }
        className="arrow"
      >
        <p>Seta para rolar para baixo</p>
      </iframe>
    </section>
  )
}

export default Hero;