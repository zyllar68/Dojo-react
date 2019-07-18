import React from 'react';
import { Title, Subtitle } from './sub_components/bulma_components/TitleComponent';
import { CustomCardSection5 } from './sub_components/CustomCard';
import { Button } from './sub_components/bulma_components/ButtonComponent';
import { ColumnSectionCard5 } from './sub_components/CustomColumns';
import { Columns, Column }  from './sub_components/bulma_components/ColumnsComponent';

export const SectionComponentFieldFive = () => (

  <section className='section'>
    <div className='container'>
      <div className='section6title'>
        Investment Types
      </div>

      <Title nameClass='section6title2' label='we:{flip} Properties'>
        <Subtitle label='Flip available properties intelligently selected using our proprietary algorithm for best value.' />
      </Title>

      <Columns>
        <ColumnSectionCard5 />
        <ColumnSectionCard5 />
        <ColumnSectionCard5 />
        <ColumnSectionCard5 />
      </Columns>

      <Columns>
        <ColumnSectionCard5 />
        <ColumnSectionCard5 />
        <ColumnSectionCard5 />
        <ColumnSectionCard5 />
      </Columns>


      <div className="has-text-centered mt-3">
        <Button label='BROWSE MORE PROPERTIES' nameClass='is-light investNow-button is-bluebg' />
      </div>

    </div>
  </section>

);
