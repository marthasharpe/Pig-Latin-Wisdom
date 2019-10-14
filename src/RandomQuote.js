import React from 'react';
import './RandomQuote.css';
import useFetch from './useFetch';

const RandomQuote = () => {
  
  useFetch('http://api.forismatic.com/api/1.0/')
  //https://official-joke-api.appspot.com/jokes/programming/random
  return (
    <div className="quote-container">
      <h2>Random Quote</h2>
      <p>Inspirational quote to translate.</p>
    </div>
  );
}

export default RandomQuote;