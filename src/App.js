import React from 'react';
import './App.css';
import ClusterComponent from './components/ClusterComponent';
import Gallery from './components/Gallery.js';
import Brief from './components/Brief.js';

let url1 = "https://jariz.github.io/vibrant.js/examples/3.jpg";
let url2 = "https://jariz.github.io/vibrant.js/examples/4.jpg";

function App() {
  return (
    <div className="App">
      <header>
      </header>    
      <Gallery/>
      {/* <ClusterComponent images={[{url:url1},{url:url2},{url:url2},{url:url1},{url:url2}]} /> */}
      {/* <Brief/> */}
    </div>
  );
}

export default App;
