import React from 'react';
import './RandomQuote.css';
import useFetch from './useFetch';

const RandomQuote = () => {
  
  useFetch('http://api.forismatic.com/api/1.0/')
  
  return (
    <div className="quote-container">
      <h1>Random Quote</h1>
      {}
    </div>
  );
}

export default RandomQuote;