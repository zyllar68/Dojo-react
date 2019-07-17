import React from 'react';

export const Navbar = ({ nameClass, children, id }) => (
  <div className={ 'navbar ' + nameClass } id={ id }>
    {children}
  </div>
); 

export const NavbarBrand = ({ nameClass, children }) => (
  <div className={ 'navbar-brand ' + nameClass }>
    {children}
  </div>
);

export const NavbarBurger = ({ nameClass, children }) => (
  <a className={ 'navbar-burger ' + nameClass }>
    {children}
  </a>
);

export const NavbarMenu = ({ nameClass, children, id }) => (
  <div className={ 'navbar-menu ' + nameClass } id={id}>
    {children}
  </div>
);

export const NavbarStart = ({ nameClass, children }) => (
  <div className={ 'navbar-start ' + nameClass }>
    {children}
  </div>
);

export const NavbarEnd = ({ nameClass, children }) => (
  <div className={ 'navbar-end ' + nameClass }>
    {children}
  </div>
);

export const NavbarItem = ({ nameClass, children }) => (
  <a className={ 'navbar-item ' + nameClass }>
    {children}
  </a>
);
