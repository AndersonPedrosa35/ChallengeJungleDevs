import React, { useState } from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import framework from '../assets/framework.svg';

export default function Home() {
  const [amountChild, setAmountChild] = useState({
    child: '',
    hours: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);

  function calculatePrice(child, hours) {
    let sumDescount = child > 2 ? 0.75 : 1.25; 
    let children = parseFloat(child) > 1 ? child * ((child * sumDescount) - 15) : 15;
    setTotalPrice(Math.abs(children * parseFloat(hours)));
  }

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
      <form className="market-form" onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="market-name" className="label">
          <input className="input" id="market-name" placeholder="name" />
        </label>
        <label htmlFor="market-email" className="label">
          <input className="input" id="market-email" placeholder="email" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <hr className="separator"/>
      <section className="prices">
        <section className="options-prices">
          <form onSubmit={ (e) => e.preventDefault() }>
            <label htmlFor="child" className="label">
              Calculate prices
              <br />
              <input
                id="child"
                type="number"
                className="input label"
                placeholder="How many children"
                value={amountChild.child} 
                onChange={ ({ target }) => setAmountChild({...amountChild, child: target.value}) } 
              />
            </label>
            <label htmlFor="hour" className="label">
              <input
                id="hour"
                type="number"
                className="input label"
                placeholder="How much hours"
                value={ amountChild.hours }
                onChange={ ({ target }) => setAmountChild({...amountChild, hours: target.value}) }
              />
            </label>
            <br />
            <button
              className="label"
              type="submit" 
              onClick={ () => calculatePrice(amountChild.child, amountChild.hours) }
            >
              Calculate
            </button>
          </form>
          <span className="label">
            The total price amount:
          </span>
          { totalPrice ? `  ${totalPrice}` : `  0` }
        </section>
        <section className="description-prices">
          <h3>Shared payments made simple</h3>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. 
            Try sharing that bill week in, week out and you might encounter 
            more than a few snares. But not with Hapu. Simply set your rates 
            and our automated payment system takes care of the rest. You need 
            never talk money or who owes what.
          </p>
          <br />
          <p>Read how Bridget’s share (without Hapu) ended over $15</p>
        </section>
      </section>
      <hr className="separator"/>
      <section className="framework">
        <h3>A framework built for the long term</h3>
        <p>
          Childcare is for the long term. And you need a framework 
          you can count on that gives your share long term viability 
          and success. That’s why we’ve defined Hapu around our three 
          tribal principles; clearly defined process, transparency 
          over money and equality of participation.
        </p>
        <p>Read how Hapu’s tribal background defines our app </p>
        <br />
        <img src={ framework } alt="framework" />
      </section>
      <hr className="separator"/>
    </div>
  )
}
