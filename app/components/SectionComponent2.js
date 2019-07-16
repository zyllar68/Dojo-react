import React from 'react';
import { SectionTitleTwo } from './sub_components/bulma_components/TitleComponent';
import { Columns, Column }  from './sub_components/bulma_components/ColumnsComponent';

export const SectionComponentFieldTwo = () => (
    <section className="section section2">
      <Columns nameClass='is-multiline'>
        <Column nameClass='is-half-desktop is-one-quarter-tablet'>
          <img className="image-mobile-section2" src="./app/css/assets//image-1.png" />
          <img className="imagev2-mobile-section2" src="./app/css/assets//image-1v2.jpg" />
        </Column>
        <Column nameClass='is-half-desktop'>
          <div className="section">
            <div className="container-2nd">
              <SectionTitleTwo
                nameClass1='title'
                label1='About Us'
                nameClass2='subtitle'
                label2='we:{fund} is the only platform that enables you to flip properties
                and invest into real estate anytime and anywhere.'
              />
              <SectionTitleTwo
                nameClass1='title'
                label1='Diversify your portfolio'
                nameClass2='subtitle'
                label2='we:{fund} is the only platform that enables you to flip properties
                and invest into real estate anytime and anywhere.'
              />
              <SectionTitleTwo
                nameClass1='title'
                label1='Cash flow and appreciation'
                nameClass2='subtitle'
                label2='Earn a preferred 9% return on cash flow and over 15%
                IRR upon sale'
              />
              <SectionTitleTwo
                nameClass1='title'
                label1='Peace of Mind'
                nameClass2='subtitle'
                label2='Your investment is protected by stabilized cash flows from AAA tenants'
              />
            </div>
          </div>
        </Column>
      </Columns>
    </section>
);
