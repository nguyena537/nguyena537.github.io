import React from 'react';

export default function Section(props) {
    return (
        <div className={`section ${props.topic}-section`}>
            <h2 className="section-title">{props.title}</h2>
            {props.location && <h3 className="section-location">{props.location}</h3>}
            {props.date && <h3 className="section-date">{props.date}</h3>}
            {props.bullets && <ul className="section-bullet-list">
                {props.bullets.map((point) => <li className="section-bullet">{point}</li>)}
            </ul>}
            {props.image && <div className="section-image-container"><img src={props.image} className="section-image" /></div>}
        </div>
    )
}