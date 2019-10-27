import React, { Component } from 'react';
import PredictFrame from './PredictFrame';
import Pose from './Pose'
import './App.css';
import PoseQueue from "./PoseQueue";

class App extends Component {
  render() {
      // ultimately you have all the things in one whole array. then you can constantly cut off the array from the beginning
      let chicken = [
          {'name': 'arms_up', 'current': false},
          {'name': 'fart', 'current': false},
          {'name': 'slant_right', 'current': false},
          {'name': 't_pose', 'current': false},
          {'name': 'touchdown', 'current': false},
          {'name': 'slant_left', 'current': false}
          ];
      // chicken = [{'name': 'fart', 'current': false},{'name': 'fart', 'current': false}];
    return (
      <div className="App">
          <div className="Title">Poser</div>
          <div className="webcam-frame">
              <PredictFrame/>
          </div>
          <div className="pose-queue">
              <div className={"space"}/>
              {/*<Pose name={'fart'} current={true} />*/}
              <PoseQueue pose_q={chicken} />
          </div>
      </div>
    );
  }
}

export default App;
