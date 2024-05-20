import React from 'react';
import { Section } from '../index.js';
import piano from "../images/piano.jpg";
import sports from "../images/sports.jpg";
import videogames from "../images/videogames.jpg";

export default function Interests() {
    return (
        <div className="interests" id="interests">
            <h1>My Interests</h1>
            <div className="interests-sections">
                <Section
                    title="Piano"
                    topic="interests"
                    image={piano}
                />

                <Section
                    title="Sports"
                    topic="interests"
                    image={sports}
                />

                <Section
                    title="Video Games"
                    topic="interests"
                    image={videogames}
                />
            </div>
        </div>
    )
}