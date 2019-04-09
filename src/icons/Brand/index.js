import React from 'react';

const Brand = ({ color = '#fff' }) => (
  <svg viewBox="0 0 63 45">
    <g>
      <path fill={color} fillRule="nonzero" opacity=".5" d="M0 9.2v34.9c0 .5.4.9 1 .9h42.6c.9 0 1.3-1 .6-1.6L1.5 8.6C1 8 0 8.5 0 9.2z"/>
      <path fill={color} fillRule="nonzero" opacity=".5" d="M63 9.2v34.9c0 .5-.4.9-1 .9H19.5c-.9 0-1.3-1-.6-1.6L61.5 8.5c.6-.4 1.5 0 1.5.7z"/>
      <path fill={color} fillRule="nonzero" opacity=".5" d="M11 43.7L38.5.4a.9.9 0 0 1 1.5 0L63 43.6c.3.6-.1 1.3-.8 1.3l-50.3.1c-.7 0-1-.7-.8-1.3z"/>
      <path fill={color} fillRule="nonzero" opacity=".5" d="M.1 43.7L22.3.4a.9.9 0 0 1 1.5 0L52 43.6c.3.6-.1 1.3-.8 1.3L1 45c-.7 0-1.1-.7-.8-1.3z"/>
    </g>
  </svg>
);

export default Brand;