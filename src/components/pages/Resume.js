import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2 className='page-titles'>Resume</h2>
            <p>
              Download my <a href='../../Assets/KANA Tech CV.docx' download='KANA Tech CV.docx'>Resume</a>
            </p>
            <h3>Front-end Proficiencies</h3>
            <ul style ={{fontSize:'20px'}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul style ={{fontSize:'20px'}}>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
};

export default Resume;