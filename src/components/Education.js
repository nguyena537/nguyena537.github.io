import React from 'react';
import { Section } from '../index.js';

export default function Education() {
    return (
        <div className="education" id="education">
            <h1>My Education</h1>
            <div className="education-sections">
                <Section
                    title="B.S. Computer Science"
                    location="University of California, Riverside"
                    date="Sept 2021 - June 2024"
                    bullets={[
                            
                    ]}
                    topic="education"
                />
            </div>
            
        </div>
    )
}