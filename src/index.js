import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';
import Section from './components/Section.js';
import ClickMeButton from './components/ClickMeButton.js';
import HideClickMeButton from './components/HideClickMeButton.js';

export {Navbar, Home, About, Education, Experience, Interests, Footer, Section, ClickMeButton, HideClickMeButton};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
