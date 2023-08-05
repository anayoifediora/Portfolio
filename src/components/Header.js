import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const Header = () => {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <div className='header'>
                <h1 className='title'>Kanayochi</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
            <div className='main'>
                {renderPage()}
            </div>
        </>
    )
}

export default Header;