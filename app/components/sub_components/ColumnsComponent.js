import React from 'react';
import ReactDOM from 'react-dom';

export const ColumnsField = ({ nameClass, children}) => (
  <div className={ 'columns ' + nameClass }>
    {children}
  </div>
);

export const ColumnField = ({ nameClass, children }) => (
  <div className={ 'columns ' + nameClass }>
    {children}
  </div>
);
