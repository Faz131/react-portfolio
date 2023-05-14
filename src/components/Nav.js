import React from "react";
import '../styles/Navbar.css'


function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className="ul-item">
            <li className="nav-item">
                <a href='#home'
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </a>
            </li>

            <li className="nav-item">
                <a href='#project'
                    onClick={() => handlePageChange('Project')}
                    className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                    My Projects
                </a>
            </li>
            <li className="nav-item">
                <a href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact Me
                </a>
            </li>

            <li className="nav-item">
                <a href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
            <li className="nav-item">
                <a href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
        </ul>
    )



}

export default Nav;