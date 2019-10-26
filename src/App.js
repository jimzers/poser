import React, { Component } from 'react';
import PredictFrame from './PredictFrame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Title">Poser</div>
          <PredictFrame/>
      </div>
    );
  }
}

export default App;
