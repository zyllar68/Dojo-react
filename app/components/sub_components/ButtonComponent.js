import React from 'react';

export const ButtonField = ({nameClass, label,}) => (
  <a className={ 'button ' + nameClass}>
    <strong>{label}</strong>
  </a>
);
