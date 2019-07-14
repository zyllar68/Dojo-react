import React from 'react';

export const TitleField = ({ label1, nameClass1 }) => (
  <div className={nameClass1}>{label1}</div>
);

export const SectionTitleTwo = ({ label1, nameClass1, label2, nameClass2 }) => (
   <div className="section-title">
      <div className={nameClass1}>
        {label1}
      </div> 
      <div className={nameClass2}>
        {label2}
      </div> 
   </div>
);

