import React from 'react';
import About from '../components/About';
import Framework from '../components/Framework';
import Hero from '../components/Hero';
import Market from '../components/Market';
import Prices from '../components/Prices';
import App from '../assets/app.svg';
import '../styles/Home.css';

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
      <img src={ App } alt="Ilustration" />
      <h3>Coming soon: Nanny Share Daily Diary!</h3>
      <p>
        With the Hapu daily diary your nanny will be able to 
        update you and your sharers with photos and commentary 
        of the day. You and sharers will receive notifications 
        and you’ll be able to login to view the daily adventures 
        fo your little ones. We can’t wait!
        </p>
    </div>
  )
}
