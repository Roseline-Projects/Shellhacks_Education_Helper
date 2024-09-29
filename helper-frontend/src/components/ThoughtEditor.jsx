import { useState } from "react";
import React from "react";
import "./thoughteditor.css"
import ReactDOM from 'react-dom/client'
import {edgesMap, nodesMap} from "./ThoughtNetwork"
// import handleChange from "./Thought"
import { onNodeClick } from "./ThoughtNetwork";
import Thought from "./Thought";
//import { handleCaptureElementClick } from "./ThoughtNetwork";
import update from "./ThoughtNetwork"
import requestUpdate from "./ThoughtNetwork"

import { nodeSelected } from "./ThoughtNetwork";




function ThoughtEditor(props) {
    const [userText, setUserText]  = useState("")

    const retrieveInputChange = (event) => {
        setUserText(event.target.value)
    }

    const handleChange = (event) => {
        event.preventDefault();

        console.log('node discovered', nodeSelected)
        let newText = userText
        console.log(newText)
        console.log(event)
        let id = nodeSelected.id

        return true
    }
    return (
        <>
        <div class='panel-container'>
            <h2 id='thought-name'>{props.name}</h2>
            <div className="q-container">
                <ul>
                    <li>{props.question1}</li>
                    <li>{props.question2}</li>
                    <li>{props.question3}</li>
                </ul>
            </div>
            <div className="notes">
                <h3>Notes:</h3>
                <textarea></textarea>
             </div>

        </div>
        </>
    )

}

export default ThoughtEditor