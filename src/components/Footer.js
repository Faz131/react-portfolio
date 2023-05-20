import React from "react";
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Be sure to add some style get some icons place the Footer at the botoom use anc tags for clickable link

function Footer() {
    return (
        <>
            <div className="footer-style text-bg-secondary p-3">
                {/* <p>
                GitHub
            </p>
            <p>
                LinkedIn
            </p> */}

                <a href="https://github.com/Faz131?tab=repositories" target="_blank" rel="noopener noreferrer ">
                    <FontAwesomeIcon icon={faGithub} />

                </a>
                <a href="https://www.linkedin.com/in/mike-fazio/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>



            </div>



        </>
    )





}

export default Footer;