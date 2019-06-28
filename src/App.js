import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from 'components/GalleryView.js';
import rake from 'rake-js';

function App() {
  debugger;
  const myKeywords = rake(`Our philosophy is that ice cream is a product worthy of becoming a daily dessert for the masses instead of being an occasional luxury. So we have worked tirelessly to develop a product which is extremely low on calories and sugar than any other outgoing product in the market and at the same time retains the indulging flavour and texture of high fat, high sugar ice cream.
  `);
  console.log(myKeywords);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
