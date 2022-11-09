import { useState } from 'react';

import './AddExpenseViewSelectInput.scss';

import AddExpenseViewSelectOptionsDialog from '../AddExpenseViewSelectOptionsDialog/AddExpenseViewSelectOptionsDialog';

const AddExpenseViewSelectInput = ({
  data,
  title,
  dataCallback,
  initialData,
}: any) => {
  const [selectedObject, setSelectedObject] = useState(initialData);

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
          <AddExpenseViewSelectOptionsDialog
            data={data}
            setSelectedObject={setSelectedObject}
            dataCallback={dataCallback}
          />
        </div>
      </div>
    </div>
  );
};

export default AddExpenseViewSelectInput;
