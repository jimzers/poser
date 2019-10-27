import React, { Component } from 'react';
import './PoseQueue.css';
import Pose from "./Pose";

class PoseQueue extends Component {
    constructor(props) {
        super(props);
        this.queue = props.param;
        this.toPose = this.toPose.bind(this);
    }

    toPose(array) {
        let keyId = 0;
        let result = [];
        for(let i = 0; i < array.length; i++) {
            result.push(<Pose name={array[i].name} current={array[i].current} key={keyId}/>);
            keyId++;
        }
        return result;
    }

    render() {
        if(typeof this.queue[0] !== 'undefined') {
            this.queue[0].current = true;
        }

        // show next 5 poses in queue

        // two things for each q object - name, current
        let pose_q = this.toPose(this.queue.slice(0, 5));

        // map(
        //     (pose) => (<Pose name={pose.name} current={pose.current} key={this.keyId}/>)
        // );
        return(
            <div className={"pose-queue-container"}>
                {pose_q}
            </div>
        )
    }
}

export default PoseQueue;