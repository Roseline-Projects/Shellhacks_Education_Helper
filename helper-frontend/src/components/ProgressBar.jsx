import React from "react";
import { useState } from "react";
import "./progressbar.css"
import { completedThoughts } from "./Thought";
import { currentLevel } from "./LevelBar";

function ProgressBar() {
    const[progress, setProgress] = useState('0%')
    function progressionTrack() {
        // if(completedThoughts == 22) {
        //     setProgress('100%')
        // } else if(completedThoughts >= 19) {
        //     setProgress((19/22.0))
        // } else if(completedThoughts >= 16) {
        //     setProgress((15/22.0))
        // } else if(completedThoughts >= 13) {

        // }
        setProgress((completedThoughts/22.0).toString())
        console.log("progress is ", progress)

    }

    return (
        <>
        <div class='progress-bar-container'>
            {/* <div id='progress-bar-tracker' style={{width:progress}}>{progress}</div> */}
            <progress value={progress} className="progress-bar"></progress>
        </div>
        <button onClick={progressionTrack}>Check</button>
        </>

    )
}

export default ProgressBar