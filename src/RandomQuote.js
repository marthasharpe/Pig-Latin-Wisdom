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
      <button onClick={fetchQuote}>Next Saying</button>
      <Translator text={text}/>
      <p className="english quote">{text}</p>
    </div>
  );
}

export default RandomQuote;