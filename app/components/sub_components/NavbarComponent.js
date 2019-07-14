import React from 'react';
import { ButtonField } from './ButtonComponent';
import { TitleField } from './TitleComponent';


export const NavbarField = () => (
  <nav className="navbar" id="navbar-top">
    <div className="container">
    <div className="navbar-brand padded-mobile-navbar">

      <div className="navbar-item">
        <img src="./app/css/assets/logo.png" alt="logo" />
      </div>

      <a role="button" className="navbar-burger burger has-text-light" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu" id="navbarBasicExample">
      <div className="navbar-start nv-small-hover">
        <a className="navbar-item">
          ABOUT US
        </a>
        <a className="navbar-item">
          HOW IT WORKS
        </a>
        <a className="navbar-item">
          INVESTMENT TYPES
        </a>
        <a className="navbar-item">
          EDUCATION
        </a>
        <a className="navbar-item">
          FAQ
        </a>
      </div>
      <div className="navbar-end has-text-centered">
        <ButtonField
          nameClass='button is-text rounded-button button-login border-white'
          label='LOGIN'
        />
        <ButtonField
          nameClass='button is-light rounded-button button-signup is-bluebg'
          label='SIGN UP'
        />
      </div>
    </div>
    </div>
    <div className="dim-black display-none" id="dim-bg"></div>
  </nav>
);
