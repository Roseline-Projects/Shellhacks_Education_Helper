import React from "react";
import { useState } from "react";
import "./level.css"
import LevelBar from "./LevelBar"
import ProgressBar from "./ProgressBar"

function Level() {
    return (
        <>
        <div className="level-visual-container">
            <p>Level</p> <LevelBar/>

        </div>
        <div className="progress-bar-container">
            <p>Progress</p> <ProgressBar/>

        </div>
        </>
        
    )

}

export default Level