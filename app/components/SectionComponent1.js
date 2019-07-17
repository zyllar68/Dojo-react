import React from 'react';
import { NavbarField } from './sub_components/CustomNavbar'
import { Title, Subtitle } from './sub_components/bulma_components/TitleComponent';
import { LinkButton } from './sub_components/bulma_components/ButtonComponent';

var image1 = "./app/css/assets/background.png";

export const SectionComponentFieldOne = () => (
    <section className="hero is-fullheight has-background-image"  style={{backgroundImage: "url(" + image1 + ")"}}>
      <div className="hero-head">
        <NavbarField />
      </div>
      <div className="hero-body has-text-white nav-body">
        <div className="container has-text-centered">
          <Title
            label='TAP INTO A BRAND-NEW ASSET CLASS'
            nameClass='has-text-white title-section1'
          />
          <Subtitle
            label='Wall Street returns for the individual investor'
            nameClass='has-text-white'
          />
          <LinkButton
            nameClass='is-light rounded-button button-signup is-bluebg has-text-white'
            label='GET STARTED'
          />
        </div>
      </div>
    </section>
);
