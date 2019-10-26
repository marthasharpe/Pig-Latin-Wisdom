import React from 'react';
import './App.css';
import RandomQuote from './RandomQuote';

function App() {
  
  return (
    <div className="App">
      <h1>Words of Wisdom</h1>
      <h2>~ in Pig Latin ~</h2>
      <div className="app-container">
        <RandomQuote />
      </div>
    </div>
  );
}

export default App;
