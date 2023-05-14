import React from "react";
import backgroundImage from '../../assets/backgroundImage.png'

const style = {
    homeStyle: {
        backgroundColor: 'blue',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', height: '100vh', width: '100vw'

    }
}

export default function Home() {
    return (



        <div>           <h1 style={style.homeStyle}>
            My Portfolio
        </h1>


        </div>


    )
}

