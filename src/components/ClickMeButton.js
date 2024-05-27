import React, { useState } from 'react';

export default function ClickMeButton(props) {
    const [buttonStyle, setButtonStyle] = useState({top: '10%', right: '10%'});
    const [buttonEvents, setButtonEvents] = useState({onClick: buttonClickedFirstTime});
    const { showClickMe } = props;

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function moveRandomSpot() {
        console.log("move")
        const dimensions = Math.floor(Math.random() * 100) + 50;
        
        let rightOption1 = Math.floor(Math.random() * 15);
        let rightOption2 = Math.floor(Math.random() * 20) + 75;
        let right = (Math.floor(Math.random() * 2) + 1) == 1 ? rightOption1 : rightOption2;

        setButtonStyle({
            top: `${Math.floor(Math.random() * 80)}%`,
            right: `${right}%`,
            width:  `${dimensions}px`,
            height: `${dimensions}px`,
            backgroundColor: getRandomColor(),
            borderColor: getRandomColor(),
            color: getRandomColor(),
            fontSize: `${dimensions / 7}px`,
            borderWidth: `${dimensions / 10}px`,
            
        });
    }

    function buttonClickedFirstTime() {
        alert("This is my big flex. Good luck!");
        moveRandomSpot();
        setButtonEvents({onClicked: buttonClicked, onMouseOver: moveRandomSpot});
    }

    function buttonClicked() {
        alert("You clicked the button!");
    }

    return (
        <div className="click-me-button" id="about">
            <button {...buttonEvents} className={`click-me-button ${showClickMe ? 'show' : 'hide'}`} style={buttonStyle}><span className="click-me-button-text">Click Me!</span></button>
        </div>
    )
}