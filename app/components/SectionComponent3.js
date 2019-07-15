import React from 'react';
import ReactDOM from 'react-dom';
import { TitleField } from './sub_components/TitleComponent';
import { ColumnsField, ColumnField  } from './sub_components/ColumnsComponent';
import { CardField, CardContentField } from './sub_components/CardComponent';

var image1 = "./app/css/assets/city-background.png";

export const SectionComponentFieldThree = () => (
    // <section className="section has-background-image2" style={{backgroundImage: "url(" + image1 + ")"}}>
    //
    //   <div className="container mt-1">
    //
    //     <TitleField nameClass='sectionTitle3' label='How we:{fund} is differet from a traditional REIT'/>
    //
    //     <ColumnsField nameClass='is-centered is-gapless has-text-white pt-1'>
    //
    //       <ColumnField nameClass='is-5 column-in-vs-left'>
    //
    //         <CardField nameClass='bg-blue card-wefund'>
    //
    //           <CardContentField>
    //
    //             <TitleField nameClass='sectionTitle3 pt-1' label='we:{fund}'/>
    //
    //             <ColumnsField nameClass='is-mobile is-gapless mt-2'>
    //               <ColumnField nameClass='is-1'></ColumnField>
    //               <ColumnField nameClass='is-1'>
    //                 <img className="plus mt-p5" src="./app/css/assets/plus.png" />
    //               </ColumnField>
    //               <ColumnField nameClass='is-1'></ColumnField>
    //               <ColumnField nameClass='is-8'>
    //                 <span className="plus-word">Higher annualized returns than public REITs</span>
    //               </ColumnField>
    //               <ColumnField nameClass='is-1'></ColumnField>
    //             </ColumnsField>
    //
    //           </CardContentField>
    //
    //         </CardField>
    //
    //       </ColumnField>
    //
    //       <ColumnField nameClass='is-1'>
    //         <figure className='image is-64x64 has-image-centered vs-image'>
    //           <img src='./app/css/assets/vs.png' />
    //         </figure>
    //       </ColumnField>
    //
    //       <ColumnField nameClass='is-5 column-in-vs-right'>
    //         <CardField nameClass='bg-blue card-trads'>
    //           <CardContentField>
    //             <TitleField nameClass='sectionTitle3' label='Traditional REIT'/>
    //           </CardContentField>
    //         </CardField>
    //       </ColumnField>
    //
    //     </ColumnsField>
    //
    //     <TitleField nameClass='sectionTitle3 pt-1' label='How wefund is different from do-it-yourself RE investing'/>
    //
    //   </div>
    // </section>

  <section className="section has-background-image2" style={{backgroundImage: "url(" + image1 + ")"}}>

      <div class="container mt-1">

          <TitleField nameClass='sectionTitle3' label='How we:{fund} is differet from a traditional REIT'/>

          <div className="columns is-centered is-gapless has-text-white pt-1">

            <div className="column is-5 column-in-vs-left">
              <div className="card bg-blue card-wefund">
                <div className="card-content">
                  <TitleField nameClass='sectionTitle3' label='we:{fund}'/>

                  <div className="columns is-mobile is-gapless mt-2">
                    <div className="column is-1"></div>
                    <div className="column is-1">
                      <img className="plus mt-p5" src="./app/css/assets/plus.png" alt="plus" />
                    </div>
                    <div className="column is-1"></div>
                    <div className="column is-8">
                      <span className="plus-word">Higher annualized returns than public REITs</span>
                    </div>
                    <div className="column is-1"></div>
                  </div>

                  <div class="columns is-mobile is-gapless">
                    <div class="column is-1"></div>
                    <div class="column is-1">
                      <img class="plus mt-p5" src="./app/css/assets/plus.png" alt="plus" />
                    </div>
                    <div class="column is-1"></div>
                    <div class="column is-8">
                      <span class="plus-word">Rental cash flows come from owners with skin in the game</span>
                    </div>
                    <div class="column is-1"></div>
                  </div>

                  <div class="columns is-mobile is-gapless">
                    <div class="column is-1"></div>
                    <div class="column is-1">
                      <img class="plus mt-p5" src="./app/css/assets/plus.png" alt="plus" />
                    </div>
                    <div class="column is-1"></div>
                    <div class="column is-8">
                      <span class="plus-word">No latency on rental cash flows-properties are all pre-leased</span>
                    </div>
                    <div class="column is-1"></div>
                  </div>


                  <div class="columns is-mobile is-gapless">
                    <div class="column is-1"></div>
                    <div class="column is-1">
                      <img class="plus mt-p5" src="./app/css/assets/plus.png" alt="plus" />
                    </div>
                    <div class="column is-1"></div>
                    <div class="column is-8">
                      <span class="plus-word">Technology DNA seeks highest returns possible</span>
                    </div>
                    <div class="column is-1"></div>
                  </div>

                </div>
              </div>
            </div>

            <div className="column is-1">
              <figure class='image is-64x64 has-image-centered vs-image'>
                <img src='./app/css/assets/vs.png' />
              </figure>
            </div>

            <div class="column is-5 column-in-vs-right">
            </div>

          </div>

      </div>

  </section>
);
