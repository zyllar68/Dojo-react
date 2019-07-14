import React from 'react';
import { NavbarField } from './sub_components/NavbarComponent'
import { TitleField } from './sub_components/TitleComponent';
import { ButtonField } from './sub_components/ButtonComponent';

var image1 = "./app/css/assets/background.png";

export const SectionComponentFieldOne = () => (
    <section className="hero is-fullheight has-background-image"  style={{backgroundImage: "url(" + image1 + ")"}}>
      <div className="hero-head">
        <NavbarField />
      </div>
      <div className="hero-body has-text-white nav-body">
        <div className="container has-text-centered">
          <TitleField
            label1='TAP INTO A BRAND-NEW ASSET CLASS'
            nameClass1='title has-text-white title-section1'
          />
          <TitleField
            label1='Wall Street returns for the individual investor'
            nameClass1='subtitle has-text-white'
          />
          <ButtonField
            nameClass='button is-light rounded-button button-signup is-bluebg has-text-white'
            label='GET STARTED'
          />
        </div>
      </div>
    </section>
);
