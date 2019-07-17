import React from 'react';

export const Card = ({ nameClass, children }) => (
  <div className={'card ' + nameClass}>
    { children }
  </div>
);
 
export const CardHeader = ({ nameClass, children }) => (
  <div className={'card-header ' + nameClass}>
    { children }
  </div>
);

export const CardContent = ({ nameClass, children }) => (
  <div className={'card-content ' + nameClass}>
    { children }
  </div>
);
