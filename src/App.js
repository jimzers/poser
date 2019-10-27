import React, { Component } from 'react';
import PredictFrame from './PredictFrame';
import './App.css';
import PoseQueue from "./PoseQueue";


class App extends Component {
    constructor(props) {
        super(props);
        // ultimately you have all the things in one whole array. then you can constantly cut off the array from the beginning
        let jingleBells = [
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'random', current: false},
            {name: 'touchdown', current: false},
            {name: 'arms_up', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'arms_up', current: false},
            {name: 'arms_up', current: false},
            {name: 'slant_right', current: false},
            {name: 'arms_up', current: false},
            {name: 'random', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'random', current: false},
            {name: 'touchdown', current: false},
            {name: 'arms_up', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_left', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'slant_right', current: false},
            {name: 'random', current: false},
            {name: 'random', current: false},
            {name: 'slant_left', current: false},
            {name: 'arms_up', current: false},
            {name: 'touchdown', current: false}
        ];

        let maryHadALittleLamb = [
            {name: 'tree_pose', current: false},
            {name: 'random', current: false},
            {name: 'slant_left', current: false},
            {name: 'random', current: false},
            {name: 'tree_pose', current: false},
            {name: 'tree_pose', current: false},
            {name: 'tree_pose', current: false},
            {name: 'random', current: false},
            {name: 'random', current: false},
            {name: 'random', current: false},
            {name: 'tree_pose', current: false},
            {name: 'touchdown', current: false},
            {name: 'touchdown', current: false},
            {name: 'tree_pose', current: false},
            {name: 'random', current: false},
            {name: 'slant_left', current: false},
            {name: 'random', current: false},
            {name: 'tree_pose', current: false},
            {name: 'tree_pose', current: false},
            {name: 'tree_pose', current: false},
            {name: 'tree_pose', current: false},
            {name: 'random', current: false},
            {name: 'random', current: false},
            {name: 'tree_pose', current: false},
            {name: 'random', current: false},
            {name: 'slant_left', current: false}
        ];
        this.state = {
            poseArray: maryHadALittleLamb
        };
        this.childKey = 0;
        this.advancePose = this.advancePose.bind(this);
    }

    advancePose() {
        if(this.state.poseArray.length > 1) {
            this.setState({poseArray: this.state.poseArray.slice(1)});
        }
        else {
            this.setState({poseArray: []});
        }
    }

    render() {
        this.childKey++;
        return (
            <div className="App">
                <div> <img src={require("./assets/poser_logo.png")} alt="this is illegal" width="300" height ="140" align="top" /></div>
                <button onClick={this.advancePose}>Click to progress</button>
                <div className="webcam-frame">
                    <PredictFrame/>
                </div>
                <div className="pose-queue">
                    <div className={"space"}/>
                    <PoseQueue param={this.state.poseArray} key={this.childKey} />
                </div>
            </div>
        )
    }
}

export default App;
