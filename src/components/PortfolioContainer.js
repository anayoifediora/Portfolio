import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { render } from '@testing-library/react';



function PortfolioContainer() {

    return (
        <>
            <div>
                <Header /> 
            </div>
            <div>
                <Footer />
            </div>
        </>

    );
}

export default PortfolioContainer;