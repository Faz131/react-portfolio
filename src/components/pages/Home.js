import React from "react";
import backgroundImage from '../../assets/my_image.jpeg'
import '../../styles/Home.css'


function Home() {
    return (
        <>
            <div className="text-bg-success p-3">
                <h1  >
                    My Portfolio
                </h1>
                <img src={backgroundImage} alt="My background" className="my_image my_image_container"></img>

                <p className="para-tag">
                    Welcome to my Portfolio.  This is just a brief introduction
                </p>
            </div>
        </>

    )
};

export default Home;