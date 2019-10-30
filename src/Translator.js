import React, { useState, useEffect } from 'react';
import './Translator.css';

const Translator = ({ text }) => {
  
  const [ pigLatin, setPigLatin ] = useState('');

  useEffect(() => {
    // splits text into separate words stored in an array
    let englishArray = text.toLowerCase().split(/\s/);
    console.log(englishArray);
    // translates each word in the array into Pig Latin
    let pigLatinArray = englishArray.map((word) => {
      if (word.match(/^\W/)) { //if word is non-alphnumeric
        return word;
      } else if (word.match(/\w+(?=[!?.,:;])/g)) {
        return `${word}hi`;
      } else if (word.match(/^[aeiou]/)) {  //if word begins with a vowel, append "way"
        return `${word}yay`;
      } else {  //if word begins with consonant(s), append starting consonants and "ay"
        return word.replace(/^([^aeiou]+)(.*)/, '$2$1ay');
      }
    })
    console.log(pigLatinArray);
    // joins the array into a single string again and sets state
    let joinedSaying = pigLatinArray.join(' ');
    setPigLatin(joinedSaying);
  },[text]);

  return (
    <div className="translator-container">
      <p className="translation quote">{pigLatin}</p>
    </div>
  );
}

export default Translator;