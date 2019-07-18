import React from 'react';
import { Title, Subtitle } from './bulma_components/TitleComponent';
import { Card, CardContent } from './bulma_components/CardComponent';
import { Columns, Column  } from './bulma_components/ColumnsComponent';
import { Listitemwrapper, Listitemwrapperend } from './bulma_components/ListitemwrapperComponent';
import { ColumnSection5 } from './CustomColumns';
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
        <ColumnSection5 label='Location' iconClass='fas fa-angle-down' iconNameClass='is-small' resultLabel='Los Angeles, CA'/>
        <ColumnSection5 label='Property Type' iconClass='fas fa-angle-down' iconNameClass='is-small' resultLabel='Duplex'/>
        <ColumnSection5 label='Min. Price' iconClass='fas fa-angle-down' iconNameClass='is-small' resultLabel='$20,000'/>
        <ColumnSection5 label='Max Price' iconClass='fas fa-angle-down' iconNameClass='is-small' resultLabel='$50,000'/>
        <Column>
          <Button label='FILTER PROPERTIES' nameClass='is-bluebg section6-button-filter'/>
        </Column>
      </Columns>
    </CardContent>
  </Card>

);

export const CustomCardSectionHouse5 = ({ imgNameClass, imgHouse, imgHeart }) => (

  <Card nameClass='card-for-houses' stylish={{backgroundImage: "url(" + imgHouse + ")"}}>
    <CardContent>
      <img className={imgNameClass} src={imgHeart}/>
      <div className='content-name'>
        <Title label='$200,00'>
          <Subtitle label='Property NameProperty NameProperty NameProperty NameProperty NameProperty NameProperty NameProperty Name' />
        </Title>
        <Subtitle label='Los Angeles, CA' />
      </div>
    </CardContent>
  </Card>

);
