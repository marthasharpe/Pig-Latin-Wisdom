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
      <div className="quote-block">
        <Translator text={text}/>
      </div>
      <div className="quote-block">
        <p className="english">{text}</p>
      </div>
    </div>
  );
}

export default RandomQuote;