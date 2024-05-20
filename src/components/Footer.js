import React from 'react';
import githublogo from '../images/githublogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import emaillogo from '../images/emaillogo.jpg';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div id="footer-logos">
                <a href="https://github.com/nguyena537"><img src={githublogo} className="footer-logo" /></a>
                <a href="https://www.linkedin.com/in/andre-nguyen-28aa15223/"><img src={linkedinlogo} className="footer-logo" /></a>
                <a href="mailto:nguyena537@gmail.com"><img src={emaillogo} className="footer-logo" /></a>
            </div>
            <h2 className="footer-text">Andre Nguyen</h2>
        </footer>
    )
}