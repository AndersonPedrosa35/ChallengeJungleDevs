import React from 'react';
import framework from '../assets/framework.svg';
import '../styles/Framework.css';

export default function Framework() {
  return (
    <section className="framework">
      <h3>A framework built for the long term</h3>
      <br />
      <p>
        Childcare is for the long term. And you need a framework 
        you can count on that gives your share long term viability 
        and success. That’s why we’ve defined Hapu around our three 
        tribal principles; clearly defined process, transparency 
        over money and equality of participation.
      </p>
      <br />
      <p>Read how Hapu’s tribal background defines our app </p>
      <br />
      <img src={ framework } alt="framework" />
    </section>
  )
}
