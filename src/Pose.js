import React, { Component } from 'react';

class Pose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pose: props.pose,
            current: props.current
        }
    }
    render() {
        return (
            <div className={"pose-frame " + (this.state.current ? "current" : "")}>
                <img src={require("./assets/tree-pose.png")}  alt={"bruh"}/>
            </div>
        );
    }
}

export default Pose;