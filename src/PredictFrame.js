import React, { Component } from 'react';
import './PredictFrame.css';

import * as tf from '@tensorflow/tfjs';
import * as tfd from '@tensorflow/tfjs-data';

class PredictFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        let webcam = await tfd.webcam(document.getElementById('webcam'));
        const screenShot = await webcam.capture();

        // truncatedMobileNet.predict(screenShot.expandDims(0));
        // screenShot.dispose();
    }
    render() {
        return (
            <div className="webcam-box-outer">
                <div className="webcam-box-inner">
                    <video autoPlay playsinline muted id="webcam" width="224" height="224"/>
                </div>
            </div>
        );
    }
}