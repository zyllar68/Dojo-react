import React, { Component } from 'react';
import { Title, Subtitle } from './sub_components/bulma_components/TitleComponent';
import { Columns, Column }  from './sub_components/bulma_components/ColumnsComponent';
import { Button } from './sub_components/bulma_components/ButtonComponent';
 
export const SectionComponentFieldSix = () => (

  <section className='section mt-2 padding-0'>
    <Columns>
      <Column>
        <div className='container-section6'>
          <Title label='we:{fund} Investment' />
          <Subtitle label='This investment type allows you to join and invest into a limited partnership with we:{fund} Investments. We have an array of highly experienced investment teams that will provide growth and relatively high returns without the complexity and worries.' />
          <Button nameClass='is-light investNow-button is-bluebg' label='INVEST WITH WE:{FUND}'/>
        </div>
      </Column>
      <Column>
        <img className="image-section7" src="./app/css/assets/image-2.png" />
      </Column>
    </Columns>
  </section>

);
