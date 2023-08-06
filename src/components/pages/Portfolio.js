import React from 'react';
import Weather from '../../Assets/Weather Dashboard.png';
import Employee from '../../Assets/Employee database.png';
import Fishspots from '../../Assets/10-marlin.gif';
import Scheduler from '../../Assets/Workday Scheduler.png';


const Portfolio = () => {

    return (
        <div className='projects-container'>
            <h2 className='page-titles'>Portfolio</h2>
            <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                <div className="card" style={{width: '35rem'}}>
                    <img src={Weather} className="app-image card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Weather ForeCast Dashboard</h5>
                        <a href="#" class="card-link">Github</a>
                        <a href="#" class="card-link">App link</a>
                    </div>
                </div>
                <div className="card" style={{width: '35rem'}}>
                    <img src={Employee} className="app-image card-img-top" alt="..." style={{height: '310px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">Weather ForeCast Dashboard</h5>
                        <a href="#" class="card-link">Github</a>
                        <a href="#" class="card-link">App link</a>
                    </div>
                </div>
            </div>
            <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
            <div className="card" style={{width: '35rem'}}>
                    <img src={Fishspots} className="app-image card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Weather ForeCast Dashboard</h5>
                        <a href="#" class="card-link">Github</a>
                        <a href="#" class="card-link">App link</a>
                    </div>
                </div>
                <div className="card" style={{width: '35rem'}}>
                    <img src={Scheduler} className="app-image card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Weather ForeCast Dashboard</h5>
                        <a href="#" class="card-link">Github</a>
                        <a href="#" class="card-link">App link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;