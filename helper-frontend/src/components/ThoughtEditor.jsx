import { useState } from "react";
import React from "react";
import "./thoughteditor.css"

function ThoughtEditor(props) {
    return (
        <>
        <div class='panel-container'>
            <h2 id='thought-name'>{props.name}</h2>
            <div className="q-container">
                <ul>
                    <li>{props.question1}</li> {/*Unordered list of guiding questions - Will be imported from a file that contains typical guiding questions for each node type*/}
                    <li>{props.question2}</li>
                    <li>{props.question3}</li>
                </ul>
            </div>
            <div className="entry-container">
                <form className="thought-edit-zone">
                    <input type="text" id='input-text' className="text-area" placeholder="Enter your thoughts...."></input>
                    <button className="submit-button" id='submit'>Save</button>
                </form>

            </div>

        </div>
        </>


    )

}

export default ThoughtEditor