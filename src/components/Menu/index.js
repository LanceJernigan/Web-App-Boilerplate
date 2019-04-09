import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Menu = ({
  show = true,
  color = '#fff',
}) => (
  show
    ? (
      <div
        className="menu"
      >
        <Link
          to="/engineer"
          style={{
            color: color,
          }}
        >
          Engineer
        </Link>
        <Link
          to="/mentor"
          style={{
            color: color,
          }}
        >
          Mentor
        </Link>
        <Link
          to="/writer"
          style={{
            color: color,
          }}
        >
          Writer
        </Link>
      </div>
    )
    : null
);

export default Menu;