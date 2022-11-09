import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  addExpenseOption,
  setIsResetInput,
} from '../../../redux/features/expenseSlice';

import './AddExpense.scss';

import {
  initialSelectWallet,
  initialSelectCategory,
  initialAmountInput,
  initialDateInput,
  initialNoteInput,
} from '../../../data';
import { AddExpenseViewInputBox } from '../../../components';

const AddExpense = () => {
  const dispatch = useDispatch();
  const [expenseData, setExpenseData] = useState<any>({});
  const [isSaveAlertVisible, setIsSaveAlertVisible] = useState<boolean>(false);
  const [isAddedToList, setIsAddedToList] = useState<boolean>(false);

  const handleAddExpense = () => {
    try {
      if (expenseData.amount.value !== 0) {
        const resetData = {
          id: uuidv4(),
          wallet: initialSelectWallet,
          category: initialSelectCategory,
          amount: initialAmountInput,
          date: initialDateInput,
          note: initialNoteInput,
        };
        dispatch(addExpenseOption(expenseData));
        setIsAddedToList(true);
        setExpenseData(resetData);
      }
    } catch (error) {
      setIsAddedToList(false);
      alert(error);
    }

    setIsSaveAlertVisible(true);
    dispatch(setIsResetInput(true));

    setTimeout(() => {
      setIsSaveAlertVisible(false);
      setIsAddedToList(false);
    }, 2000);
  };

  return (
    <div className='pg-add-expense'>
      <div className='pg-add-expense-box'>
        <AddExpenseViewInputBox setExpenseData={setExpenseData} />
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
