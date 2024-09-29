import React from "react";
import { useState } from "react";
import "./levelbar.css"
import { completedThoughts } from "./Thought";

export let currentLevel = 0

export const levelIncrement = (event) => {
    event.preventDefault()
    console.log('ive arrived')
    console.log(completedThoughts)
    if(completedThoughts != 0) {
        if(completedThoughts % 3 == 0) {
            currentLevel++
        } else if(completedThoughts == 22) {
            currentLevel = 5
        }
    }
    console.log(currentLevel)
}

function LevelBar() {
    const[levelTracker, setTracker] = useState(currentLevel)
    const updateStyle = () => {
        console.log('made it')
        setTracker(currentLevel)
        return levelTracker
    }

    let styleStr = "completed-level"
    return (
        <>
        {levelIncrement}
        <div class='level-stages-container'>
            <span>Level</span>
            <ul class='stages-holder'>
                <li className={levelTracker >= 1 ? styleStr : ''}>1</li>
                <li className={levelTracker >= 2 ? styleStr : ''}>2</li>
                <li className={levelTracker >= 3 ? styleStr : ''}>3</li>
                <li className={levelTracker>= 4 ? styleStr : ''}>4</li>
                <li className={levelTracker >= 5 ? styleStr : ''}>5</li>
            </ul>
        </div>
            <button onClick={updateStyle}>Check</button>
        </>
    )

}

export default LevelBar