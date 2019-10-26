import React from 'react';
import './App.css';
import RandomQuote from './RandomQuote';

function App() {
  
  return (
    <div className="App">
      <div className="title">
        <h1>Words of Wisdom</h1>
        <h2>~ in Plain Pig Latin ~</h2>
      </div>
      <RandomQuote />
    </div>
  );
}

export default App;
