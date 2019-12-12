import React, { useState, useEffect } from 'react';
import './RandomQuote.css';
import Translator from './Translator';
import { quotes } from './quotes';

  // Broken API call :(
  // fetch('https://api.quotable.io/random')
  //   .then(response => response.json())
  //   .then(quote => {
  //     setText(`${quote.content} — ${quote.author}`)
  //   })

const RandomQuote = () => {
  const [ text, setText ] = useState('');
  
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    setText(`${quote.content} — ${quote.author}`);
    }

  return (
    <div className="quote-container">
      <button onClick={fetchQuote}>New Saying</button>
      <p className="english quote">{text}</p>
      <h2 className="title">Translation:</h2>
      <Translator text={text}/>
    </div>
  );
}

export default RandomQuote;