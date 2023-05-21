import React from "react";
import '../styles/Navbar.css'


function Nav({ currentPage, handlePageChange }) {
    return (

        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a class="nav-link active" aria-current="page" href='#home'
                                onClick={() => handlePageChange('Home')}
                                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a class="nav-link" href='#project'
                                onClick={() => handlePageChange('Project')}
                                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                                My Projects
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href='#contact'
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                Contact Me
                            </a>
                        </li>

                        <li className="nav-item">
                            <a class="nav-link" href='#resume'
                                onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                                Resume
                            </a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href='#about'
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                                About Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )


}

export default Nav;