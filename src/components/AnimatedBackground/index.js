import React from 'react';

import style from './style.scss';

const GooeyFilter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey_filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>
);

const AnimatedBackground = () => (
    <div
        className="animated_background"
    >
        <GooeyFilter />
        <div
            className="animated_background-content"
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default AnimatedBackground;