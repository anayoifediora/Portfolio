import React, { useState } from 'react';

const Portfolio = () => {
    return (
        <div>
            <h2 className='page-titles'>Portfolio</h2>
            <div class="card" style={{width: '18rem'}}>
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <a href="#" class="card-link">Github</a>
                    <a href="#" class="card-link">Deployed</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;