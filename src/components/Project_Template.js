import React from "react";

function Project_Template(project) {
    return (

        <>
            <div>
                {project.image}
            </div>

            <div>
                {project.dplink}
            </div>

            <div>
                {project.title}
            </div>

            <div>
                {project.link}
            </div>



        </>
    )
}

export default Project_Template;