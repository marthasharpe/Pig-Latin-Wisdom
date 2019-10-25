import React, { useState, useEffect } from 'react';
import './RandomQuote.css';

const RandomQuote = () => {

  const [ quote, setQuote ] = useState('');
  const [ author, setAuthor] = useState('');
  
  useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(`${data.content} —${data.author}`)
      setQuote(data.content);
      setAuthor(data.author);
    })
  }, []);
  
  return (
    <div className="quote-container">
      <h2>Random Quote</h2>
      <p>{quote}</p>
      <p>- {author}</p>
    </div>
  );
}

export default RandomQuote;