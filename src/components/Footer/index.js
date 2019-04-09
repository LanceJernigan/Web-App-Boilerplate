import React from 'react';
import { Link } from 'react-router-dom';

import Brand from '../../icons/Brand';

import style from './style.scss';

const Footer = () => (
  <section
    className="footer"
  >
    <Link
      to="/"
    >
      <div
        className="footer-icon"
      >
        <Brand />
      </div>
      <p>Home</p>
    </Link>
  </section>
);

export default Footer;