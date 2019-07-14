import React from 'react';
import { TitleField } from './sub_components/TitleComponent';
import { ColumnsField, ColumnField  } from './sub_components/ColumnsComponent';

var image1 = "./app/css/assets/city-background.png";

export const SectionComponentFieldThree = () => (
    <section className="section has-background-image2" style={{backgroundImage: "url(" + image1 + ")"}}>
      <div className="container mt-1">
        <h1 className="title sectionTitle3">How we:fund is differet from a traditional REIT</h1>
        <ColumnsField
          nameClass='is-centered is-gapless has-text-white pt-1'>
          <ColumnField
            nameClass='is-5 column-in-vs-left'>
          </ColumnField>
        </ColumnsField>
        <h1 className="title sectionTitle3 pt-1">How wefund is different from do-it-yourself RE investing</h1>
      </div>
    </section>
);
