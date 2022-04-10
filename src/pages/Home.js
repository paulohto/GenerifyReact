import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cards from '../components/Cards';

function Home () {
    return (
    <div>
        {/* BANNER PRINCIPAL */}
        <div class="main-banner">
            <div class="main-text">
                <p style={{fontFamily: 'Sofia, sans-serif', fontSize: "60pt", color: "#ffffff", letterSpacing: "0px", fontWeight: "normal"}}>Generify</p>
                <p>Assine agora, ligue o play e esqueça o mundo</p>

                <Link class="nav-link" to="/">
                    <button class="main-button main-button1" style={{fontWeight:"normal"}}>ASSINAR</button> 
                </Link>          
            </div>
        </div>
        
        <Cards/>
        
    </div>


    );

    
}

export default Home;