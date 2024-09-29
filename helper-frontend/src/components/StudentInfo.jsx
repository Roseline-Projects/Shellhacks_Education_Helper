import React from "react";
import { useState } from "react";
import "./studentinfo.css"

function StudentInfo(props) {
    return (
        <>
        <div className="studentinfo-container">
            <h2>{props.name}</h2>
            <h3>{props.class}</h3>
            <h3>{props.assignment}</h3>
        </div>
        </>

    )

}

export default StudentInfo