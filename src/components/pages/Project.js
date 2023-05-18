import React from "react";
import '../../styles/Projects.css';
import proectImage1 from '../../assets/note_taker.png';
import Project_Template from "../Project_Template";
import projectImage2 from '../../assets/Login.png'

const allProjects = [
    {
        image: proectImage1,
        title: 'Project 1',
        link: 'www.google.com',
        dpLink: 'www.google.com',
    },

    {
        image: projectImage2,
        title: 'Project 2',
        link: 'www.google.com',
        dpLink: 'www.google.com',
    }

]

// function Project(props) {


//     const allProjects = props.projectItems;
//     const myProjects = allProjects.map((allProjects) =>
//         <div key={allProjects.toString}>
//             <h2>
//                 {allProjects.title}
//             </h2>
//             {/* <img src={allProjects.image}></img> <a href={allProjects.link}></a> */}

//         </div>
//     )
//     return (
//         <>
//             <div>
//                 {myProjects}
//             </div>
//         </>
//     )
// };

function Project() {
    return (
        <div className="flex-container">
            {allProjects.map((project) => (
                <div className="flex-item" key={project.title}>
                    <img src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p><a href={project.link}>Visit site</a></p>
                    <p><a href={project.dpLink}>View on Dribbble</a></p>
                </div>
            ))}
        </div>
    );
}

export default Project;