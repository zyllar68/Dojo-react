import React from 'react';

export const Icon = ({ nameClass, iconClass }) => (

  <span className={ 'icon ' + nameClass }>
    <i className={ iconClass } aria-hidden="true"></i>
  </span>

);
