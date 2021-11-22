import React from 'react';

export const SvgFragment = ({ icon, path = '/sprite.svg' }) => (
  <span className={`svg svg--${icon}`}>
    <svg>
      <use xlinkHref={`${path}#${icon}`}></use>
    </svg>
  </span>
);
