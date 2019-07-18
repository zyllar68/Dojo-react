import React from 'react';

export const LinkButton = ({nameClass, label,}) => (
  <a className={ 'button ' + nameClass}>
    <strong>{label}</strong>
  </a>
);

export const Button = ({nameClass, label, children}) => (
  <button className={ 'button ' + nameClass}>
    <strong>{label}</strong>
    {children}
  </button>
);
