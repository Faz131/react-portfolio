import React from "react";
import backgroundImage from '../../assets/my_image.jpeg'
import '../../styles/Home.css'


function Home() {
    return (
        <>


            <div className="div-h1">
                <h1>
                    Hi I'm Mike
                    Aspring Junior Web Developer
                </h1>
            </div>
            <div className="my_image_container  ">
                <img src={backgroundImage} alt="My background" className="my_image  "></img>
            </div>
            <div>
                <p className="para-tag">
                    Welcome to my Portfolio.  This is just a brief introduction
                </p>
            </div>



        </>

    )
};

export default Home;