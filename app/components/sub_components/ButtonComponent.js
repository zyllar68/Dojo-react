import React from 'react';

export const ButtonField = ({nameClass, label,}) => (
  <a className={nameClass}>
    <strong>{label}</strong>
  </a>
);
