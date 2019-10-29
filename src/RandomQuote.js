import React, { useState, useEffect } from 'react';
import './RandomQuote.css';
import Translator from './Translator';

const RandomQuote = () => {
  const [ text, setText ] = useState('');
  
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setText(`${data.content} — ${data.author}`)
      })
    }

  return (
    <div className="quote-container">
      <button onClick={fetchQuote}>New Saying</button>
      <Translator text={text}/>
      <h2 className="title">Translation:</h2>
      <p className="english quote">{text}</p>
    </div>
  );
}

export default RandomQuote;