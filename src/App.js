import React from 'react';
import './App.css';
import RandomQuote from './RandomQuote';
import Translator from './Translator';

function App() {
  return (
    <div className="App">
      <h1>Yoda Fun</h1>
      <div className="app-container">
        <RandomQuote />
        <Translator />
      </div>
    </div>
  );
}

export default App;
