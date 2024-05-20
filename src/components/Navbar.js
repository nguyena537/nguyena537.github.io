import React from 'react';

// Navbar tabs: home, about, education, experience, interests
export default function Navbar() {
    return (
        <div className="center">
            <div className="nav">
                <a href="#home" className="nav-button" >Home</a>
                <a href="#about" className="nav-button" >About</a>
                <a href="#education" className="nav-button" >Education</a>
                <a href="#experience" className="nav-button" >Experience</a>
                <a href="#interests" className="nav-button" >Interests</a>
            </div>
        </div>
        
    )
}