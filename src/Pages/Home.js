import React, { useState } from 'react';
import About from '../components/About';
import Hero from '../components/Hero';

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
            <label>
              How many children
              <input 
                type="number" 
                value={amountChild.child} 
                onChange={ ({ target }) => setAmountChild({...amountChild, child: target.value}) } 
              />
            </label>
            <label>
              <input 
                type="number"
                value={ amountChild.hours }
                onChange={ ({ target }) => setAmountChild({...amountChild, hours: target.value}) }
              />
            </label>
            <button 
              type="submit" 
              onClick={ () => calculatePrice(amountChild.child, amountChild.hours) }
            >
              Calculate
            </button>
          </form>
          <span>
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
        </section>
      </section>
    </div>
  )
}
