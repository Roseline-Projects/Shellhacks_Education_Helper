import { useState } from "react";
import React from "react";
import "./readings.css"

function Readings(props) {
    return (
        <>
        <div className="wrapping-container">
            <div className="prompt">
            <h3>Prompt:</h3>
                <h3>{props.prompt}</h3>
            </div>
            <div className="articles-container">
                <p>{props.articles}</p>

            </div>

        </div>
        </>
    )
}

export default Readings