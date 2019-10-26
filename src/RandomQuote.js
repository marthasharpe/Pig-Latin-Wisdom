import React, { useState, useEffect } from 'react';
import './RandomQuote.css';
import Translator from './Translator';

const RandomQuote = () => {
  const [ quote, setQuote ] = useState('');
  const [ author, setAuthor] = useState('');
  
  useEffect(() => {
    fetchQuote();
  }, []);

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
      <button onClick={fetchQuote}>Next Saying</button>
      <div className="quote-block">
        <Translator quote={quote} author={author}/>
      </div>
      <div className="quote-block">
        <p className="english">{quote}</p>
        <p>- {author}</p>
      </div>
    </div>
  );
}

export default RandomQuote;