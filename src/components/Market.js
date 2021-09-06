import React from 'react';
import '../styles/Market.css';

export default function Market() {
  return (
    <>
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
  </>
  )
}
