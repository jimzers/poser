import React, { Component } from 'react';
import './PoseQueue.css';
import Pose from "./Pose";

class PoseQueue extends Component {
    constructor(props) {
        super(props);
        this.queue = props.param;
    }

    render() {
        if(typeof this.queue[0] !== 'undefined') {
            this.queue[0].current = true;
        }

        // show next 5 poses in queue

        // two things for each q object - name, current
        let pose_q = this.queue.slice(0, 5).map(
            (pose) => (<Pose name={pose.name} current={pose.current}/>)
        );
        return(
            <div className={"pose-queue-container"}>
                {pose_q}
            </div>
        )
    }
}

export default PoseQueue;