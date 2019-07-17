import React from 'react';
import { Title } from './bulma_components/TitleComponent';
import { Card, CardContent } from './bulma_components/CardComponent';
import { Columns, Column  } from './bulma_components/ColumnsComponent';
import { Listitemwrapper, Listitemwrapperend } from './bulma_components/ListitemwrapperComponent';
import { Dropdown, DropdownTrigger, DropdownTrigger, DropdownMenu, DropdownResult } from './bulma_components/DropdownComponent';
import { Button } from './bulma_components/ButtonComponent';

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

export const CustomCardSection4 = () => (
  <Card nameClass='section4 mt-3 how-it-works-left'>
    <CardContent>
      <div className='list-wrapper'>
        <div className="red-line"></div>
        <Listitemwrapper label='We analyze available properties'/>
        <Listitemwrapper nameClass='mt-3' label='We scan hundreds of data points on each property'/>
        <Listitemwrapper nameClass='mt-3' label='Our Machine Learning algorithm seeks out the highest yielding properties'/>
        <Listitemwrapper nameClass='mt-3' label='You choose your Investment Type and invest'/>
        <Listitemwrapperend nameClass='mt-3' label='Relax and watch your portfolio grow over time'/>
      </div>
    </CardContent>
  </Card>
);

export const CustomCardSection5 = () => (

  <Card>
    <CardContent>
      <Columns nameClass='is-multiline'>
        <Column>
          <Dropdown nameClass='section6dropdown'>
            <DropdownTrigger>

            </DropdownTrigger>
          </Dropdown>
        </Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </Columns>
    </CardContent>
  </Card>

);
