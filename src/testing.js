import React, { Component } from 'react';
import './Pose.css';

class testing extends Component {
    constructor(props) {
        super(props);
        this.pose_name = props.name;
        this.current = props.current;
        this.url_map = {
            't_pose': 1,
            'touchdown': 2,
            'arms_up': 3,
            'slant_right':4,
            'slant_left':5
        }
    }

    }
    render() {
        return (
            <div className={"pose-frame " + (this.current ? "current" : "")}>
                <img src={require(this.url_map[this.pose_name])}  alt={"bruh this image won't load"}/>
            </div>
        switch(x=getNum()){
            case 1:
                <audio src="./assets/middle_a.mp3" autoPlay controls/>
            case 2:
                <audio src="./assets/middle_b.mp3" autoPlay controls/>
            case 3:
                <audio src="./assets/middle_c.mp3" autoPlay controls/>
            case 4:
                <audio src="./assets/middle_d.mp3" autoPlay controls/>
            case 5:
                <audio src="./assets/middle_e.mp3" autoPlay controls/>
            );
        }
}

export default Pose;