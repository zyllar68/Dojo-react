import React from 'react';
import { Title, Subtitle } from './sub_components/bulma_components/TitleComponent';
import { CustomCardSection5 } from './sub_components/CustomCard';

export const SectionComponentFieldFive = () => (

  <section className='section'>
    <div className='container'>
      <div className='section6title'>
        Investment Types
      </div>

      <Title nameClass='section6title2' label='we:{flip} Properties'>
        <Subtitle label='Flip available properties intelligently selected using our proprietary algorithm for best value.' />
      </Title>

      <CustomCardSection5 />

    </div>
  </section>

);
