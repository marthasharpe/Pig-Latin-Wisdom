import React from 'react';
import './Translator.css';

const Translator = () => {
  
  // const baseUrl = 'http://yoda-api.appspot.com/api/v1/yodish?text';
  // const string = {quote};
  // const completeUrl = baseUrl + encodeURIComponent(string);
  // console.log(completeUrl);
  
  return (
    <div className="translator-container">
      <h2>Translator</h2>
      <p>Yoda's version of the quote.</p>
      <p>- Yoda</p>
    </div>
  );
}

export default Translator;