import "./thought.css"
import { useState } from "react"
import React from "react"
import { levelIncrement } from "./LevelBar"

// const handleChanges = (event) => {
//     event.preventDefault();
//     const[editedText, setChanges] = useState("")
// }

export let completedThoughts = 0

function Thought({name = "Not Yet", text='Write a thought...'}) {
    
    let [canEdit, setEdit] = useState(true)
    const[textInput, setTextInput] = useState("")
    //const[compeletedThoughts, setCompletedThoughts] = useState(0)
    const[visited, setVisited] = useState(false)

    const handleInputChange = (event) => {
        setTextInput(event.target.value)
        console.log('entered2')
        console.log(event.target.value)
        if(event.target.value.toString().split(" ").length >= 4 && visited == false) { {/*>=30 words required to gain points*/}
            completedThoughts++
            setVisited(true)
            console.log("thoughts ",completedThoughts)
        }
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        console.log('entered')
        handleInputChange(event)
        text = textInput
    }


    // const[editedText, setChanges] = useState("")
    return (
        <>
        <div className="background-wrapper">
            <h2 id='thought-name'>{name}</h2>
            <div className="text-container">
                <form>
                    <label htmlFor="txt"></label>
                    <input type='text' defaultValue={text} className="text-input-node" id='txt' onChange={handleSubmission}></input>
                    <button type='submit' onClick={levelIncrement} class='thought-button'>Validate</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Thought