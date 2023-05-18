import React from "react";
import backgroundImage from '../../assets/my_image.jpeg'
import '../../styles/Home.css'

// const style = {
//     homeStyle: {

//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center', height: '50vh', width: '25vw',
//         borderRadius: '75%',
//         display: 'flex',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // flexDirection: 'column'


//     }
// }

// const image_style = {
//     imageStyle:
//     {

//     }
//         }

// export default function Home() {
//     return (
//         <>
//         <div>
//             <h1 style={style.homeStyle}>
//                 My Portfolio
//             </h1>
//         </div>

// <div style={}>

// </div>

//         </>
//     )
// }

function Home() {
    return (

        <>
            <div>
                <h1 className >
                    My Portfolio
                </h1>
            </div>

            <p>
                Welcome to my Portfolio.  This is just a brief introduction
            </p>

            <div className="my_image_container">
                <img src={backgroundImage} alt="My background image" className="my_image"></img>
            </div>

        </>

    )
};

export default Home;