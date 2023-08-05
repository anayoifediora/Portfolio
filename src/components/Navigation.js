import React from 'react';


const Navigation = ({currentPage, handlePageChange}) => {

    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className={currentPage === "AboutMe" ? 'nav-link active' : 'nav-link'} 
                       aria-current="page" 
                       href="#aboutme"
                       onClick={() => handlePageChange('AboutMe')}  
                    >                     
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a className= {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                       href="#portfolio"
                       onClick={() => handlePageChange('Portfolio')}>
                     Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a className= {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                       href="#contact"
                       onClick={() => handlePageChange('Contact')}>
                     Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a className= {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                       href="#resume"
                       onClick={() => handlePageChange('Resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Navigation;