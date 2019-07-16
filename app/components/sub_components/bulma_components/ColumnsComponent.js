import React from 'react';
import ReactDOM from 'react-dom';

export const Columns = ({ nameClass, children}) => (
  <div className={ 'columns ' + nameClass }>
    {children}
  </div>
);

export const Column = ({ nameClass, children }) => (
  <div className={ 'column ' + nameClass }>
    {children}
  </div>
);
