import React, { useState, useEffect } from 'react';
import './Translator.css';

const Translator = ({ quote, author }) => {
  
  const [ pigLatin, setPigLatin ] = useState('');

  useEffect(() => {
    // splits quote into words stored in an array
    let englishArray = quote.toLowerCase().split(/\W/);
    console.log(englishArray);
    
    // translates each string in the array into Pig Latin
    // str.replace(replaceThis, withThis);
    let pigLatinArray = englishArray.map((str) => {
      if (str.match(/[_.,-]/)) { //if str is not a letter
        return str;
      } else if (str.match(/^[aeiou]/)) {  //if str begins with a vowel, append "way"
        return `${str}way`;
      } else {  //if str begins with consonant(s), append starting consonants and "ay"
        return str.replace(/^([^aeiou]+)(.*)/, '$2$1ay');
      }
    })
    console.log(pigLatinArray);

    // joins the items in the array into a single string again and sets state
      let joinedSaying = pigLatinArray.join(' ');

      setPigLatin(joinedSaying);
    },[quote]);

  return (
    <div className="translator-container">
      <p>{pigLatin}</p>
    </div>
  );
}

export default Translator;