import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addExpenseOption,
  setIsResetInput,
} from '../../../redux/features/expenseSlice';

import './AddExpense.scss';

import { AddExpenseInputBox } from '../../../components';

const AddExpense = () => {
  const dispatch = useDispatch();
  const [expenseData, setExpenseData] = useState<any>({});
  const [isSaveAlertVisible, setIsSaveAlertVisible] = useState(false);
  const [isAddedToList, setIsAddedToList] = useState(false);

  const handleAddExpense = () => {
    try {
      if (expenseData.amount.value !== 0) {
        dispatch(addExpenseOption(expenseData));
        setIsAddedToList(true);
      }
    } catch (error) {
      setIsAddedToList(false);
      alert(error);
    }

    setIsSaveAlertVisible(true);
    dispatch(setIsResetInput(true));

    setTimeout(() => {
      setIsSaveAlertVisible(false);
    }, 3000);
  };

  return (
    <div className='pg-add-expense'>
      <div className='pg-add-expense-box'>
        <AddExpenseInputBox setExpenseData={setExpenseData} />
      </div>
      <button onClick={handleAddExpense} className='pg-add-expense-button'>
        Save
      </button>
      {isSaveAlertVisible && (
        <h1
          className={`pg-add-expense-save ${
            isAddedToList ? 'success' : 'error'
          }`}
        >
          Save{' '}
          {isAddedToList
            ? 'successfully'
            : 'error, please check your input. The "amount" input cannot be 0'}
        </h1>
      )}
    </div>
  );
};

export default AddExpense;
