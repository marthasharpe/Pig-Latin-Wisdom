import React, { useState } from 'react';
import './RandomQuote.css';
import Translator from './Translator';

const RandomQuote = () => {
  const [ quote, setQuote ] = useState('I am very wise.');
  const [ author, setAuthor] = useState('Wise Person');
  
  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        console.log(`${data.content} —${data.author}`)
        setQuote(data.content);
        setAuthor(data.author);
      })
    }
  return (
    <div className="quote-container">
      <button onClick={fetchQuote}>A Wise Saying</button>
      <p>{quote}</p>
      <p>- {author}</p>
      <Translator quote={quote}/>
    </div>
  );
}

export default RandomQuote;