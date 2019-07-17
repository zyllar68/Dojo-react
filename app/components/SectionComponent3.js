import React from 'react';
import { Title } from './sub_components/bulma_components/TitleComponent';
import { Columns, Column  } from './sub_components/bulma_components/ColumnsComponent';
import { CustomCardSection3, CustomCardContent3 } from './sub_components/CustomCard';
 
var image1 = "./app/css/assets/city-background.png";

export const SectionComponentFieldThree = () => (

  <section className="section has-background-image2" style={{backgroundImage: "url(" + image1 + ")"}}>
    <Title nameClass='sectionTitle3' label='How we:{fund} is differet from a traditional REIT'/>

    <Columns nameClass='is-centered is-gapless has-text-white pt-1'>

      <Column nameClass='is-5 column-in-vs-left'>
        <CustomCardSection3 titleLabel='we:{fund}' nameClass='bg-blue card-wefund'>
          <CustomCardContent3 nClass='mt-2' imageSrc='./app/css/assets/plus.png' label='Higher annualized returns than public REITs' />
          <CustomCardContent3 imageSrc='./app/css/assets/plus.png' label='Rental cash flows come from owners with skin in the game' />
          <CustomCardContent3 imageSrc='./app/css/assets/plus.png' label='No latency on rental cash flows-properties are all pre-leased' />
          <CustomCardContent3 imageSrc='./app/css/assets/plus.png' label='Technology DNA seeks highest returns possible' />
        </CustomCardSection3>
      </Column>

      <Column nameClass='is-1'>
        <figure className='image is-64x64 has-image-centered vs-image'>
          <img src='./app/css/assets/vs.png' />
        </figure>
      </Column>

      <Column nameClass='is-5 column-in-vs-right'>
        <CustomCardSection3 titleLabel='Traditional REIT' nameClass=' card-trads'>
          <CustomCardContent3 nClass='mt-2' imageSrc='./app/css/assets/minus.png' label='Higher annualized returns than public REITs' />
          <CustomCardContent3 imageSrc='./app/css/assets/minus.png' label='Cash flows come from tenants' />
          <CustomCardContent3 imageSrc='./app/css/assets/minus.png' label='Properties can sit for months-lost income and lowered rents' />
          <CustomCardContent3 imageSrc='./app/css/assets/minus.png' label='Finance companies which try to layer on technology' />
        </CustomCardSection3>
      </Column>

    </Columns>

    <Title nameClass='sectionTitle3' label='How we{fund} is different from do-it-yourself RE investing'/>

    <Columns nameClass='is-centered is-gapless has-text-white pt-1'>

      <Column nameClass='is-5 column-in-vs-left'>
        <CustomCardSection3 titleLabel='we:{fund}' nameClass='bg-blue card-wefund'>
          <CustomCardContent3 nClass='mt-2' imageSrc='./app/css/assets/plus.png' label='Provides a turn-key, hassle free investment vehicle' />
          <CustomCardContent3 imageSrc='./app/css/assets/plus.png' label='Uses machine learning and algorithms to find you the best deals' />
          <CustomCardContent3 imageSrc='./app/css/assets/plus.png' label='Acquisitions and dispositions team headed by leading experts with years of experience' />
          <CustomCardContent3 imageSrc='./app/css/assets/plus.png' label='A sound, disciplined strategy spreads risk among multiple assets' />
        </CustomCardSection3>
      </Column>

      <Column nameClass='is-1'>
        <figure className='image is-64x64 has-image-centered vs-image'>
          <img src='./app/css/assets/vs.png' />
        </figure>
      </Column>

      <Column nameClass='is-5 column-in-vs-right'>
        <CustomCardSection3 titleLabel='Traditional REIT' nameClass=' card-trads'>
          <CustomCardContent3 nClass='mt-2' imageSrc='./app/css/assets/minus.png' label='Provides a turn key, hassle free investment vehicle' />
          <CustomCardContent3 imageSrc='./app/css/assets/minus.png' label='Uses machine learning and algorithms to find you the best deals' />
          <CustomCardContent3 imageSrc='./app/css/assets/minus.png' label='Acquisitions and dispositions team headed by leading experts with years of experience' />
          <CustomCardContent3 imageSrc='./app/css/assets/minus.png' label='All capital tied into 1-2 properties creates concentrated exposure of risk ' />
        </CustomCardSection3>
      </Column>

    </Columns>

  </section>
);
