import React from 'react';
import './App.css';
import RandomQuote from './RandomQuote';

function App() {
  
  return (
    <div className="App">
      <h1 className="title">Words of Wisdom</h1>
      <h2>~ in Pig Latin ~</h2>
      <RandomQuote />
    </div>
  );
}

export default App;
