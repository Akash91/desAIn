import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClusterComponent from './components/ClusterComponent';
import Gallery from './components/Gallery.js';
import Brief from './components/Brief.js';

let url1 = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
let url2 = "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png";
let url3 = "https://homepages.cae.wisc.edu/~ece533/images/baboon.png";
let url4 = "https://homepages.cae.wisc.edu/~ece533/images/barbara.png";
let url5 = "https://homepages.cae.wisc.edu/~ece533/images/boat.png";
let url6 = "https://homepages.cae.wisc.edu/~ece533/images/cat.png";
let url7 = "https://homepages.cae.wisc.edu/~ece533/images/fruits.png";
let url8 = "https://homepages.cae.wisc.edu/~ece533/images/frymire.png";
let url9 = "https://homepages.cae.wisc.edu/~ece533/images/girl.png";
let url10 = "https://homepages.cae.wisc.edu/~ece533/images/goldhill.png";
let url11= "https://homepages.cae.wisc.edu/~ece533/images/lena.png";
let url12 = "https://homepages.cae.wisc.edu/~ece533/images/monarch.png";
let url13 = "https://homepages.cae.wisc.edu/~ece533/images/mountain.png";
let url14 = "https://homepages.cae.wisc.edu/~ece533/images/peppers.png";
let url15 = "https://homepages.cae.wisc.edu/~ece533/images/pool.png";

let images = [
  {url:url1},
  {url:url2},
  {url:url3},
  {url:url4},
  {url:url5},
  {url:url6},
  {url:url7},
  {url:url8},
  {url:url9},
  {url:url10},
  {url:url11},
  {url:url12},
  {url:url13},
  {url:url14},
  {url:url15},
];

function App() {
  return (
    <div className="App">
      <header>
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
      <Gallery/>
      <ClusterComponent />
      {/* <Brief/>
      <Gallery/>
       */}
      <div>
      </div>
    </div>
  );
}

export default App;
