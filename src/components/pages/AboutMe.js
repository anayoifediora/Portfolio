import React from 'react';
import myImage from '../../Assets/Kana.jpg';



const AboutMe = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2 className='page-titles'>About Me</h2>
            <img src={myImage} className='my-image' alt=''/>
            <p className='my-info'>
                Hello! I am Mr. Kanayochi Ifediora, a budding Web developer. 
                I am married with two children and my interests include soccer, 
                basketball, chess, and a love for cars. One strange fact about 
                me? I love spotting Aeroplanes! I have a background in Chemical 
                Engineering, and I have also worked in Financial Services for a 
                long time, but I have recently developed an interest in Information 
                Technology and I am fascinated by it. I have decided to learn Web 
                development and this portfolio contains a host of projects I 
                have built.
                I started a Web Development Bootcamp at the University of Adelaide and 
                I am currently learning the MERN stack.
            </p>
            
        </div>

    );
}

export default AboutMe;