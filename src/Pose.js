import React, { Component } from 'react';
import './Pose.css';

class Pose extends Component {
    constructor(props) {
        super(props);
        this.pose_name = props.name;
        this.current = props.current;
        this.url_map = {
            'fart': "./assets/tree-pose.png"
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