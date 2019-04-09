import React from 'react';

import TwitterIcon from '../../icons/Twitter';
import GitHubIcon from '../../icons/GitHub';

import style from './style.scss';

const Social = () => (
  <section
    className="social"
  >
    <h1>Lance Jernigan</h1>
    <h2>@LanceJernigan</h2>
    <div
      className="social-icons"
    >
      <a
        href="https://twitter.com/Lance_Jernigan"
        target='_blank'
        className="social-icon"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://github.com/lancejernigan"
        target="_blank"
        className="social-icon"
      >
        <GitHubIcon />
      </a>
    </div>
  </section>
);

export default Social;