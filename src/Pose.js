import React, { Component } from 'react';
import './Pose.css';

class Pose extends Component {
    constructor(props) {
        super(props);
        this.pose_name = props.name;
        this.current = props.current;
        this.url_map = {
            'fart': "./assets/tree-pose.png",
            't_pose': "./assets/t_pose.jpg",
            'touchdown': "./assets/touchdown.jpg",
            'arms_up': "./assets/arms_up.jpg",
            'slant_right': "./assets/slant_right.jpg",
            'slant_left': "./assets/slant_left.jpg"
        }
    }
    render() {
        return (
            <div className={"pose-frame " + (this.current ? "current" : "")}>
                <img src={require(this.url_map[this.pose_name])}  alt={"bruh this image won't load"}/>
            </div>
        );
    }
}

export default Pose;