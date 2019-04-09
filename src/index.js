import React from 'react';
import {render} from 'react-dom';

import Root from './components/root';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
};

render(
  <Root />,
  document.getElementById('root')
);