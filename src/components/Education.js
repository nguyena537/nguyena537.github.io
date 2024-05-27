import React from 'react';
import { Section } from '../index.js';

export default function Education() {
    return (
        <div className="education part" id="education">
            <h1>My Education</h1>
            <div className="education-sections">
                <Section
                    title="B.S. Computer Science"
                    location="University of California, Riverside"
                    date="Sept 2021 - June 2024"
                    bullets={[
                        "Relevant Coursework: Principles of Web Development, Introduction to Database Management Systems, Computer Security, Data Structures and Algorithms",
                        "Skills: C++, C#, JavaScript, SQL and Relational Databases, React, Git"
                    ]}
                    topic="education"
                />
            </div>
            
        </div>
    )
}