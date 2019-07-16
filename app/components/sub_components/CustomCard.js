import React from 'react';
import { Title } from './bulma_components/TitleComponent';
import { Card, CardContent } from './bulma_components/CardComponent';
import { Columns, Column  } from './bulma_components/ColumnsComponent';

var imageSrc;

export const CustomCardSection3 = ({ nameClass,children,titleLabel }) => (
  <Card nameClass={nameClass}>
    <CardContent>
      <Title nameClass='sectionTitle3' label={titleLabel}/>
      { children }
    </CardContent>
  </Card>
);

export const CustomCardContent3 = ({ nClass, label, imageSrc }) => (
  <Columns nameClass={ 'is-mobile is-gapless ' + nClass}>
    <Column nameClass='is-1'></Column>
    <Column nameClass='is-1'>
      <img className="plus mt-p5" src={imageSrc} alt="plus" />
    </Column>
    <Column nameClass='is-1'></Column>
    <Column nameClass='is-8'>
      <span className="plus-word">{ label }</span>
    </Column>
    <Column nameClass='is-1'></Column>
  </Columns>
);
