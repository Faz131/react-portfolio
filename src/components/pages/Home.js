import React from "react";
import { useSpring, animated } from "react-spring";
import backgroundImage from '../../assets/my_image.jpeg'
import '../../styles/Home.css'


function Home() {

    const fadeAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 1000 },
    });
    return (
        <>

            <animated.div className="div-h1" style={fadeAnimation}>
                <h1>
                    MY NAME IS MIKE,
                    ASPIRING JUNIOR FULL STACK DEVELOPER
                </h1>
            </animated.div>
            <div className="my_image_container  ">
                <img src={backgroundImage} alt="My background" className="my_image  "></img>
            </div>
            <div>
                <p className="para-tag">
                    Technology used in web design:

                    <li>
                        HTML
                    </li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Jquery </li>
                    <li> React </li>
                    <li>  mySQL </li>
                    <li> MongoDB</li>
                    <li>  Insomnia</li>

                </p>
            </div>



        </>

    )
};

export default Home;