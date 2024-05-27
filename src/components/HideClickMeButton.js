import React from 'react';

export default function HideClickMeButton(props) {
    const { showClickMe, setShowClickMe } = props;

    function handleClick() {
        setShowClickMe(showClickMe => !showClickMe);
    }

    return (
        <div className="hide-button-div">
            <button className="hide-button" onClick={handleClick}>{showClickMe ? 'Hide' : 'Show'} Click Me Button</button>
        </div>
    )
}