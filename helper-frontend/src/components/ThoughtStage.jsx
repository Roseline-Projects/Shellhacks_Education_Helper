import React from "react";
import { useState } from "react";
import "./thoughtstage.css"
import CytoscapeComponent from 'react-cytoscapejs'
import { useEffect, useRef} from "react";
import { Network } from 'vis-network'
import ThoughtNetwork from "./ThoughtNetwork";


function ThoughtStage() {
    return (
        <>
        <div className="stage-container"> {/*Tree root*/}
            {/* <ul>
                <li>topic/working thesis
                    <ul>
                        <li>observation 1
                            <ul>
                                <li>d1
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>d2
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>d3
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>



                        <li>observation 2
                            <ul>
                                <li>d1
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>d2
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>d3
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>



                        <li>observation 3
                            <ul>
                                <li>d1
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>d2
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>d3
                                    <ul>
                                        <li>analysis
                                            <ul>
                                                <li>eval</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul> */}

        </div>
        </>
    )

}

export default ThoughtStage