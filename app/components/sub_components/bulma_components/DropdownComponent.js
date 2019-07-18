import React from 'react';

export const Dropdown = ({ nameClass, children }) => (

  <div className={ 'dropdown ' + nameClass }>
    {children}
  </div>

);

export const DropdownTrigger = ({ nameClass, children }) => (

  <div className={ 'dropdown-trigger ' + nameClass }>
    {children}
  </div>

);


export const DropdownMenu = ({ nameClass, children, id }) => (

  <div className={ 'dropdown-menu ' + nameClass } id={id}>
    {children}
  </div>

);

export const DropdownContent = ({ nameClass, children }) => (

  <div className={ 'dropdown-content ' + nameClass }>
    {children}
  </div>

);

export const DropdownItem = ({ nameClass, children, label }) => (

  <a className={ 'dropdown-item ' + nameClass }>
    {label}
    {children}
  </a>

);

export const DropdownResult = ({ nameClass, label }) => (

  <span className={ 'dropdown-result ' +  nameClass }>
    {label}
  </span>

);
