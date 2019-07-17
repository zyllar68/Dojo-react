import React from 'react';

export const Dropdown = ( nameClass, children ) = (

  <div className={ 'dropdown ' + nameClass }>
    {children}
  </div>

);
 
export const DropdownTrigger = ( nameClass, children ) = (

  <div className={ 'dropdown-trigger ' + nameClass }>
    {children}
  </div>

);

export const DropdownTrigger = ( nameClass, children ) = (

  <div className={ 'dropdown-menu ' + nameClass }>
    {children}
  </div>

);

export const DropdownMenu = ( nameClass, children ) = (

  <div className={ 'dropdown-menu ' + nameClass }>
    {children}
  </div>

);

export const DropdownResult = ( nameClass, children ) = (

  <div className={ 'dropdown-result ' + nameClass }>
    {children}
  </div>

);
