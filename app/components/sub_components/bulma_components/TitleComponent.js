import React from 'react';

export const Title = ({ label, nameClass, children }) => (
  <div className={ 'title ' + nameClass}>
    {label}
    {children}
  </div>
);

export const Subtitle = ({ label, nameClass }) => (
  <div className={ 'subtitle ' + nameClass}>{label}</div>
);
 
export const TitleSubtitle = ({ label, nameClass }) => (
  <div className={ 'subtitle ' + nameClass}>{label}</div>
);


export const SectionTitleTwo = ({ label1, nameClass1, label2, nameClass2 }) => (
   <div className="section-title ">
      <div className={nameClass1}>
        {label1}
      </div>
      <div className={nameClass2}>
        {label2}
      </div>
   </div>
);
