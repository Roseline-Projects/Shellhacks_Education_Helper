import "./thought.css"
import { useState } from "react"
import React from "react"

function Thought({name = "Not Yet", text='Write a thought...'}) {
    return (
        <>
        <div className="background-wrapper">
            <h2 id='thought-name'>{name}</h2>
            <div className="text-container">
                <p>{text}</p>
            </div>

        </div>
        </>
    )
}

export default Thought