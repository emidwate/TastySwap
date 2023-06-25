import React from 'react';
import { Link } from 'react-router-dom';
import Recipes from './Recipes';
import homeImg from '../assets/home-img.jpg';

export default function Home() {
  return (
    <section>
      <div className='home-bg-color'>
        <div className='home-card'>
          <form action='newsletter' className='form'>
            <h1>Tasty Swap</h1>
            <h3>Subscribe to our newsletter!</h3>
            <p>
              We will send you the best of our recipes just once a month. We
              promise.
            </p>
            <input
              type='email'
              placeholder='your.email@example.com'
              className='newsletter-input'
              id='email'
              name='email'
              required
            />
            <input
              type='text'
              placeholder='Your name'
              className='newsletter-input'
              id='name'
              name='name'
              required
            />
            <input type='submit' value='Submit' className='form-submit-btn' />
          </form>
        </div>
        <img
          src={homeImg}
          alt='Home image of ice creams'
          className='home-img'
        />
      </div>
      <Recipes />
    </section>
  );
}
