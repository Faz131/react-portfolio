import React from "react";
import '../../styles/Projects.css';
import proectImage1 from '../../assets/note_taker.png';
// import Project_Template from "../Project_Template";
import projectImage2 from '../../assets/Login.png'
import projectImage3 from '../../assets/PWA.png'

const allProjects = [
    {
        image: proectImage1,
        title: 'Note Taker',
        tech: 'HTML,CSS, JavaScript, JQuery',
        link: 'https://github.com/Faz131/Note-Taker',
        dpLink: 'https://agile-hamlet-63297.herokuapp.com/',

    },

    {
        image: projectImage2,
        title: 'No Bot Review Social Site',
        tech: 'JavaScript,TailWinds, Handlebars, ExpressJS, Insomnia',
        link: 'https://github.com/Faz131/NoBot-Reviews',
        dpLink: 'https://morning-garden-26803.herokuapp.com/',
    },

    {
        image: projectImage3,
        title: 'Text Editor PWA',
        tech: 'CSS,JavaScript,WebPack,ExpressJS',
        link: 'https://github.com/Faz131/Text-Editor',
        dpLink: 'https://desolate-dusk-68894.herokuapp.com/',
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
        <div className="flex-container  p-3" >
            {allProjects.map((project) => (
                <div className="flex-item" key={project.title}>
                    <img className="project-image" src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <h3 className="tech-style">{project.tech}</h3>
                    <p><a href={project.link} target="_blank" className="git-style">GitHub Repo</a></p>
                    <p ><a href={project.dpLink} target="_blank" className="deploy-style">Heroku Deploy</a></p>
                </div>
            ))}
        </div>
    );
}

export default Project;