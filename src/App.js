import React from 'react';
import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <h2>Let's start React!!!</h2>
        <Weather city="Porto"/>
        <p>
         It's working xD
        </p>
      </header>
    </div>
  );
}

export default App;
