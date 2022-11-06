import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addExpenseOption,
  setIsResetInput,
} from '../../../redux/features/addExpenseSlice';

import './AddExpense.scss';

import { AddExpenseInputBox } from '../../../components';

const AddExpense = () => {
  const dispatch = useDispatch();
  const [expenseData, setExpenseData] = useState([]);

  const handleAddExpense = () => {
    dispatch(addExpenseOption(expenseData));
    dispatch(setIsResetInput(true));
  };

  return (
    <div className='pg-add-expense'>
      <div className='pg-add-expense-box'>
        <AddExpenseInputBox setExpenseData={setExpenseData} />
      </div>
      <button onClick={handleAddExpense} className='pg-add-expense-button'>
        Save
      </button>
    </div>
  );
};

export default AddExpense;
