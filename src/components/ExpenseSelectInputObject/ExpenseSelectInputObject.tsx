import { useState } from 'react';

import './ExpenseSelectInputObject.scss';

import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import { initialSelectObject } from '../../data';

const ExpenseSelectInputObject = ({ data, title, dataCallback }: any) => {
  const [selectedObject, setSelectedObject] = useState(initialSelectObject);

  return (
    <div className='pg-expense-input-object'>
      <p className='pg-expense-input-object-title'>{title}</p>
      <div className='pg-expense-input-object-info'>
        <img
          src={selectedObject.iconSrc}
          alt='wallet'
          className='pg-expense-input-object-icon'
        />

        <div className='pg-expense-input-object-data-select'>
          <ConfirmationDialog
            data={data}
            setSelectedObject={setSelectedObject}
            dataCallback={dataCallback}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseSelectInputObject;
