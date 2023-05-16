import React from "react";
import '../../styles/Projects.css'

function Project() {
    return (
        <>
            <h1>My Projects</h1>
            <div className="flex-container">
                <ul >
                    <li className="flex-item">
                        <h2>
                            <a href="https://faz131.github.io/project-repo/">
                                Project 1:</a></h2>
                        Random Joke Generator: Technology used(HTML,CSS,JavaScript)

                    </li >
                    <li className="flex-item">
                        <h2>
                            <a href="">
                                Project 2:</a></h2>

                    </li>
                    <li className="flex-item">

                    </li>
                </ul>
            </div>
        </>
    )
};

export default Project;