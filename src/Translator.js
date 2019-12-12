import React, { useState, useEffect } from 'react';
import './Translator.css';

const Translator = ({ text }) => {
  
  const [ pigLatin, setPigLatin ] = useState('');

  useEffect(() => {
    // splits text into separate words stored in an array
    let englishWords = text.split(' ');    
    // translates each word in the array into Pig Latin
    let pigLatinWords = englishWords.map((eachWord) => {
      let word = eachWord.toLowerCase();
      if (word.match(/^\W/)) { //if word is non-alphnumeric
        return word;
      } else if (word.match(/\w+(?=[!?.,:;])/g)) { //if words ends with punctuation
        if (word.match(/^[aeiou]/)) { //and begins with a vowel
          return word.replace(/^([aeiou]+)(.*)(?=[!?.,:;])/, '$1$2yay');
        } else { //and begins with consonant(s)
          return word.replace(/^([^aeiou]+)(.*)(?=[!?.,:;])/, '$2$1ay');
        }
      } else if (word.match(/^[AEIOUaeiou]/)) {  //if word begins with a vowel, append "way"
        return `${word}yay`;
      } else {  //if word begins with consonant(s), append starting consonants and "ay"
        return word.replace(/^([^aeiou]+)(.*)/, '$2$1ay');
      }
    })

    let capitalPigLatin = [];
    const capitalize = (arr1, arr2) => {
      for (let i=0; i < arr1.length; i++) {
        if (arr1[i].match(/^[A-Z]/)) {
          capitalPigLatin.push(arr2[i].replace(/^\w/, char => char.toUpperCase()));
        } else {
          capitalPigLatin.push(arr2[i]);
        }
      }
    }
    capitalize(englishWords, pigLatinWords);

    // joins the array into a single string again and sets state
    let joinedSaying = capitalPigLatin.join(' ');
    setPigLatin(joinedSaying);

  },[text]);

  return (
    <div className="translator-container">
      <p className="translation quote">{pigLatin}</p>
    </div>
  );
}

export default Translator;