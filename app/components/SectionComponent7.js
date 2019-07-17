import React from 'react';
import { Button } from './sub_components/bulma_components/ButtonComponent';
import { NavbarField7, NavbarField7p1 } from './sub_components/CustomNavbar'

var footerBg = './app/css/assets/footer-bg.png';
var footerTitle = 'Join we:{fund} and start earning!';
var hrStyle = {
  border: 'none',
  height: '1px',
  backgroundColor: '#636363',
  margin: '0px'
}

export const SectionComponentFieldSeven = () => (

  <section className='section is-large footer-bg' style={{backgroundImage: "url(" + footerBg + ")"}}>
    <div className="has-text-white footer-title">{footerTitle}</div>
    <Button nameClass='is-light footer-button is-bluebg' label='GET STARTED'/>

    <NavbarField7 />

    <div className="container">
      <hr style={hrStyle} />
    </div>

    <NavbarField7p1 />


  </section>

);
