import React from 'react';
import Nani from '../assets/ImageSection1.svg';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about">
      <section className="container-text">
        <h1>Share your home, nanny and costs</h1>
        <p>
          You have a fantastic home, a fantastic nanny and 
          wouldn’t cutting your costs in half be, well, fantastic?! 
          If only it was easy to connect with other parents 
          to share your costs? Well now it is, with Hapu. 
          Hapu means tribe and it’s our foundational 3 tribal 
          principles that empowers you to create and manage 
          your own tribe. A tribe that together has the power 
          to create new affordable solutions in childcare 
          that work for you and your community.
        </p>
      </section>
      <section className="container-img">
        <img src={ Nani } alt="funcionamento do Nani Share" />
      </section>
    </section>
  )
}
