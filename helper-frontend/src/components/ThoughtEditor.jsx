import { useState } from "react";
import React from "react";
import "./thoughteditor.css"
import ReactDOM from 'react-dom/client'
import {edgesMap, nodesMap} from "./ThoughtNetwork"
// import handleChange from "./Thought"
import { onNodeClick } from "./ThoughtNetwork";
import Thought from "./Thought";
//import { handleCaptureElementClick } from "./ThoughtNetwork";
//import { captureElementClick } from "./ThoughtNetwork";
import update from "./ThoughtNetwork"
import requestUpdate from "./ThoughtNetwork"

import { nodeSelected } from "./ThoughtNetwork";

// = (onNodeClick == null ? null : onNodeClick())
// console.log('this is node rn', node)



function ThoughtEditor(props) {
    const [userText, setUserText]  = useState("")

    const retrieveInputChange = (event) => {
        setUserText(event.target.value)
    }

    const handleChange = (event) => {
        event.preventDefault();
        //const newText = event.target.value
        //let newText = handleTextInput(event)
        console.log('node discovered', nodeSelected)
        let newText = userText
        console.log(newText)
        console.log(event)
        let id = nodeSelected.id
        //nodeSelected['data']= <Thought text={newText}/>
        //update(id, <Thought text={newText}/>)
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
            {/* <div className="entry-container">
                <form className="thought-edit-zone" onSubmit={handleChange}>
                    <label htmlFor='input-text'>Edit Thought:</label>
                    <input 
                        type="text" 
                        id='input-text' 
                        className="text-area" 
                        placeholder="Enter your thoughts...."
                        value={userText}
                        onChange={retrieveInputChange}
                        >
                    </input>
                    <button className="submit-button" type='submit'>Save</button>
                </form>

            </div> */}

        </div>
        </>
    )

}

export default ThoughtEditor