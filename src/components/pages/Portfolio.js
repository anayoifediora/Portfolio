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
                        <a href="https://github.com/anayoifediora/Weather-Forecast-Dashboard" class="card-link" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://anayoifediora.github.io/Weather-Forecast-Dashboard/" class="card-link" target='_blank' rel="noreferrer">App link</a>
                    </div>
                </div>
                <div className="card" style={{width: '35rem'}}>
                    <img src={Employee} className="app-image card-img-top" alt="..." style={{height: '310px'}}/>
                    <div class="card-body">
                        <h5 class="card-title">Employee Database, Node.js App</h5>
                        <a href="https://github.com/anayoifediora/Employee-database-tracker" class="card-link" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://drive.google.com/file/d/1-tsCeRqngHLqYjwlLJfxiRkfAl07ncB7/view" class="card-link" target='_blank' rel="noreferrer">Video Demo</a>
                    </div>
                </div>
            </div>
            <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
            <div className="card" style={{width: '35rem'}}>
                    <img src={Fishspots} className="app-image card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Fishing Fanatics</h5>
                        <a href="https://github.com/robinsonfdossantos/Fishing-Fanatics" class="card-link" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://polar-ridge-73411-3a05ece12937.herokuapp.com/" class="card-link" target='_blank' rel="noreferrer">App link</a>
                    </div>
                </div>
                <div className="card" style={{width: '35rem'}}>
                    <img src={Scheduler} className="app-image card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Workday Scheduler</h5>
                        <a href="https://github.com/anayoifediora/Workday-Scheduler" class="card-link" target='_blank' rel="noreferrer">Github</a>
                        <a href="https://anayoifediora.github.io/Workday-Scheduler/" class="card-link" target='_blank' rel="noreferrer">App link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;