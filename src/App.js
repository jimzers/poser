import React, { Component } from 'react';
import PredictFrame from './PredictFrame';
import Pose from './Pose'
import './App.css';
import PoseQueue from "./PoseQueue";

class App extends Component {
  render() {
      // ultimately you have all the things in one whole array. then you can constantly cut off the array from the beginning
      let chicken = [{'name': 'fart', 'current': false},{'name': 'fart', 'current': false}, {'name': 'fart', 'current': false}, {'name': 'fart', 'current': false}, {'name': 'fart', 'current': false}, {'name': 'fart', 'current': false}];
      // chicken = [{'name': 'fart', 'current': false},{'name': 'fart', 'current': false}];
    return (
      <div className="App">
          <div className="Title">Poser</div>
          <div className="webcam-frame">
              <PredictFrame/>
          </div>
          <div className="pose-queue">
              <div className={"space"}></div>
              {/*<Pose name={'fart'} current={true} />*/}
              <PoseQueue pose_q={chicken} />
          </div>
      </div>
    );
  }
}

export default App;
