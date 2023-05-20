import React, { useState } from "react";

import Nav from './Nav';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer.js'


export default function PortfolioContainer() {
    const [currentPage, SetCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }

        if (currentPage === 'Project') {
            return <Project />;
        }

        if (currentPage === 'Contact') {
            return <Contact />;
        }

        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };

    const handlePageChange = (page) => SetCurrentPage(page);
    return (
        <div>
            <Nav currentPage={currentPage}
                handlePageChange={handlePageChange} />
            {renderPage()}


            <Footer />
        </div>


    )

}

