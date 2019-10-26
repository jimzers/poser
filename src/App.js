import React, { Component } from 'react';
import PredictFrame from './PredictFrame';
import Pose from './Pose'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Title">Poser</div>
          <div className="webcam-frame">
              <PredictFrame/>
          </div>
          <div className="pose-queue">
              <Pose/>
          </div>
      </div>
    );
  }
}

export default App;
