import React from 'react';
import { Title } from './sub_components/bulma_components/TitleComponent';
import { Columns, Column  } from './sub_components/bulma_components/ColumnsComponent';
import { CustomCardSection4 } from './sub_components/CustomCard';
import { ColumnSection4 } from './sub_components/CustomColumns';

var hrStyle = {
  position: 'relative',
  zIndex: '4',
  width: '104%',
  marginLeft: '-1.5rem'
}

export const SectionComponentFieldFour = () => (

  <section className='section bg-blue' style={{zIndex: 1}}>

    <Title nameClass='section4title mt-1' label='How It Works' />

    <Columns nameClass='is-gapless is-centered mt-3'>
      <Column nameClass='is-5 how-margin-right'>
        <CustomCardSection4/>
      </Column>
      <Column nameClass='is-5'>
        <figure className="image fix-square">
          <img src="./app/css/assets/houses.png" style={{ height: 670 }} />
        </figure>
      </Column>
    </Columns>

    <hr className="mt-5 hoz-line-mob" style={hrStyle} />

    <Columns nameClass='is-mobile is-centered mt-n4p3 box-content'>
      <ColumnSection4 nameClass='is-one-fifth wid-15cent' imgSrc='./app/css/assets/Box1.svg' label='Tell us a bit about yourself and your investment goals'/>
      <ColumnSection4 nameClass='is-one-fifth wid-15cent' imgSrc='./app/css/assets/Box2.svg' label='One of our agents will call you to discuss your investment goals and strategy'/>
      <ColumnSection4 nameClass='is-one-fifth wid-15cent' imgSrc='./app/css/assets/Box3.svg' label='hoose the investment type that fits your portfolio and invest directly on our platform'/>
      <ColumnSection4 nameClass='is-one-fifth wid-15cent' imgSrc='./app/css/assets/Box4.svg' label='Monitor your investment’s growth directly on our platform'/>

    </Columns>

  </section>

);
