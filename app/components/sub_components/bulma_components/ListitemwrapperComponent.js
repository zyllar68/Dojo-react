import React from 'react';

export const Listitemwrapper = ({ nameClass, label }) => (
  <div className={ 'list-item-wrapper ' + nameClass}>
    <div className="list-bullet"></div>
    <div className="list-item">
      <div className="list-title"></div>
      <div className="list-text">{label}</div>
    </div>
  </div>
);

export const Listitemwrapperend = ({ nameClass, label }) => (
  <div className={ 'list-item-wrapper ' + nameClass}>
    <div className="list-bullet"></div>
    <div className="list-item">
      <div className="list-title"></div>
      <div className="list-text">{label}</div>
    </div>
    <div className="white-line"></div>
  </div>
);
