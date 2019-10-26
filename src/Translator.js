import React, { useState } from 'react';
import './Translator.css';

const Translator = ({ quote }) => {
  
  const [ yodish, setYodish ] = useState('Very wise, I am.')

  const baseUrl = 'https://cors-anywhere.herokuapp.com/http://yoda-api.appspot.com/api/v1/yodish?text=';
  const encodedString = encodeURIComponent(quote);
  const completeUrl = baseUrl + encodedString;
  
  const fetchYoda = () => {
    console.log(completeUrl);
    fetch(completeUrl)
      .then(response => response.json())
      .then(data => {
        setYodish(data.yodish);
      })
    }
  
  return (
    <div className="translator-container">
      <button onClick={fetchYoda}>What Would Yoda Say?</button>
      <p>{yodish}</p>
      <p>- Yoda</p>
    </div>
  );
}

export default Translator;