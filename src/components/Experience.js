import React from 'react';
import { Section } from '../index.js';

export default function Experience() {
    return (
        <div className="experience" id="experience">
            <h1>My Experience</h1>
            <div className="experience-sections" id="experience">
                <Section
                    title="Software Engineer Intern"
                    location="Cubic Corporation"
                    date="April 2023 - Present"
                    bullets={[
                        "Used C# and .NET Framework to develop and maintain a web app, a desktop app, and microservices",
                        "Completed JIRA tickets relating to bug fixes, feature implementations, and unit tests"    
                    ]}
                    topic="experience"
                />

                <Section
                    title="Team Member"
                    location="Jamba"
                    date="July 2022 - September 2022"
                    bullets={[
                        "Collaborated with a team to maintain high standards of customer service",
                        "Communicated clearly and positively with customers and coworkers"    
                    ]}
                    topic="experience"
                />
            </div>
            
        </div>
    )
}