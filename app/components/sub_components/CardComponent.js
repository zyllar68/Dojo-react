import React from 'react';

export const CardField = ({ nameClass, children }) => (
  <div className={'card ' + nameClass}>
    { children }
  </div>
);

export const CardHeaderField = ({ nameClass, children }) => (
  <div className={'card-header ' + nameClass}>
    { children }
  </div>
);

export const CardContentField = ({ nameClass, children }) => (
  <div className={'card-content ' + nameClass}>
    { children }
  </div>
);
