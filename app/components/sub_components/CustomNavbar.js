import React from 'react';
import { LinkButton } from './bulma_components/ButtonComponent';
import { Navbar, NavbarStart, NavbarEnd, NavbarItem, NavbarBrand, NavbarBurger, NavbarMenu } from './bulma_components/NavbarComponent';

var footerCR = '©2019 – we:{fund} | All right reserved';

export const NavbarField = () => (
  <Navbar id='navbar-top'>
    <div className="container">
 
      <NavbarBrand nameClass='padded-mobile-navbar'>
        <NavbarItem nameClass='none-pointer'>
          <img src="./app/css/assets/logo.png" alt="logo" />
        </NavbarItem>

        <NavbarBurger nameClass='burger has-text-light' role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </NavbarBurger>
      </NavbarBrand>

      <NavbarMenu id="navbarBasicExample">
        <NavbarStart nameClass='nv-small-hover'>
          <NavbarItem>
            ABOUT US
          </NavbarItem>
          <NavbarItem>
            HOW IT WORKS
          </NavbarItem>
          <NavbarItem>
            INVESTMENT TYPES
          </NavbarItem>
          <NavbarItem>
            EDUCATION
          </NavbarItem>
          <NavbarItem>
            FAQ
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd nameClass='has-text-centered'>
          <LinkButton
            nameClass='button is-text rounded-button button-login border-white'
            label='LOGIN'
          />
          <LinkButton
            nameClass='button is-light rounded-button button-signup is-bluebg'
            label='SIGN UP'
          />
        </NavbarEnd>
      </NavbarMenu>

    </div>
    <div className="dim-black display-none" id="dim-bg"></div>
  </Navbar>
);

export const NavbarField7 = () => (

  <Navbar nameClass='footer-navbar'>
    <div className='container'>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem>
            ABOUT US
          </NavbarItem>
          <NavbarItem>
            HOW IT WORKS
          </NavbarItem>
          <NavbarItem>
            INVESTMENT TYPES
          </NavbarItem>
          <NavbarItem>
            EDUCATION
          </NavbarItem>
          <NavbarItem>
            FAQ
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            LOGIN
          </NavbarItem>
          <NavbarItem>
            LOGIN
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </div>
  </Navbar>

);

export const NavbarField7p1 = () => (

  <Navbar nameClass='footer-navbar2'>
    <div className='container'>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem>
            <img src="../app/css/assets/logo.png" />
          </NavbarItem>
          <NavbarItem>
            <img src="../app/css/assets/facebook.png" />
          </NavbarItem>
          <NavbarItem>
            <img src="../app/css/assets/linkedin@3x.png" />
          </NavbarItem>
          <NavbarItem>
            <img src="../app/css/assets/twitter@3x.png" />
          </NavbarItem>
          <NavbarItem>
            <img src="../app/css/assets/instagram@3x.png" />
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            {footerCR}
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </div>
  </Navbar>

);
