import React from 'react';
import { Columns, Column  } from './bulma_components/ColumnsComponent';
import { Title } from './bulma_components/TitleComponent';

export const ColumnSection4 = ({ nameClass, label, imgSrc}) => (

  <Column nameClass={nameClass}>
    <img className="box-image1" src={imgSrc} />
    <Title nameClass='section4semititle' label={label} />
  </Column>

);
