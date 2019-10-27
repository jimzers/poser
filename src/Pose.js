import React, { Component } from 'react';
import './Pose.css';

class Pose extends Component {
    constructor(props) {
        super(props);
        this.pose_name = props.name;
        this.current = props.current;
        this.url_map_image = {
            'tree_pose': "./assets/tree-pose.png",
            't_pose': "./assets/t_pose.jpg",
            'touchdown': "./assets/touchdown.jpg",
            'arms_up': "./assets/arms_up.jpg",
            'slant_right': "./assets/slant_right.jpg",
            'slant_left': "./assets/slant_left.jpg",
            'random': "./assets/random.png"
        };
        this.url_map_sound = {
            'tree_pose': "./assets/middle_a.mp3",
            't_pose': "./assets/middle_b.mp3",
            'touchdown': "./assets/middle_c.mp3",
            'arms_up': "./assets/middle_d.mp3",
            'slant_right': "./assets/middle_e.mp3",
            'slant_left': "./assets/middle_f.mp3",
            'random': "./assets/middle_g.mp3"
        };
    }
    render() {
        return (
            <div className={"pose-frame " + (this.current ? "current" : "")}>
                    <audio autoPlay>
                        <source src={require(this.url_map_sound[this.pose_name])} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <img src={require(this.url_map_image[this.pose_name])}  alt={"bruh this image won't load"}/>
            </div>
        )
    }
}

export default Pose;