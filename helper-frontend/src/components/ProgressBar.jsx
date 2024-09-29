import React from "react";
import { useState } from "react";
import "./progressbar.css"
import { completedThoughts } from "./Thought";
import { currentLevel } from "./LevelBar";

function ProgressBar() {
    const[progress, setProgress] = useState('0%')
    const progressionTrack = () => {
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