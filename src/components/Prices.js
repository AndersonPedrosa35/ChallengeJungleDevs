import React, { useState } from 'react';
import '../styles/Prices.css';

export default function Prices() {
  const [amountChild, setAmountChild] = useState({
    child: '',
    hours: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);

  function calculatePrice(child, hours) {
    let numChild = parseFloat(child);
    let sumDescount = numChild > 2 ? 1.66 : 1.25; 
    if(numChild > 3) {
      sumDescount = 1.55;
    }
    let children = numChild > 1 ? (numChild * sumDescount) - 15 : 15;
    setTotalPrice(Math.round(Math.abs(children * parseFloat(hours))));
  }

  return (
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
              data-testid="input-cal"
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
              data-testid="input-cal"
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
        <span 
          className="label"
          role="listitem"
          >
          The total price amount:
        { totalPrice ? `  ${totalPrice}` : `  0` }
        </span>
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
  )
}
