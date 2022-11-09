import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './AddExpenseViewInputBox.scss';

import AddExpenseViewSelectInput from '../AddExpenseViewSelectInput/AddExpenseViewSelectInput';
import AddExpenseViewTypingInput from '../AddExpenseViewTypingInput/AddExpenseViewTypingInput';
import {
  wallet,
  categories,
  initialSelectWallet,
  initialSelectCategory,
  initialAmountInput,
  initialDateInput,
  initialNoteInput,
} from '../../../data';

const AddExpenseViewInputBox = ({ setExpenseData }: any) => {
  const [categoryData, setCategoryData] = useState<any>(initialSelectCategory);
  const [walletData, setWalletData] = useState<any>(initialSelectWallet);
  const [amountData, setAmountData] = useState(initialAmountInput);
  const [dateData, setDateData] = useState(initialDateInput);
  const [noteData, setNoteData] = useState(initialNoteInput);

  const expenseWalletData = (data: any): void => {
    const walletFullData = wallet.find((option) => option.value === data);
    setWalletData(walletFullData);
  };

  const expenseCategoryData = (data: any): void => {
    const categoryFullData = categories.find((option) => option.value === data);
    setCategoryData(categoryFullData);
  };

  const expenseAmountData = (data: any): void => {
    data.id = 39;
    setAmountData(data);
  };

  const expenseDateData = (data: any): void => {
    data.id = 40;
    setDateData(data);
  };

  const expenseNoteData = (data: any): void => {
    console.log(data);

    data.id = 41;
    setNoteData(data);
  };

  useEffect(() => {
    const combineData = {
      id: uuidv4(),
      wallet: walletData,
      category: categoryData,
      amount: amountData,
      date: dateData,
      note: noteData,
    };

    setExpenseData(combineData);
  }, [
    amountData,
    categoryData,
    dateData,
    noteData,
    setExpenseData,
    walletData,
  ]);

  return (
    <div className='pg-expense-input-box'>
      <div className='pg-expense-input-title'>Add Transaction</div>
      <form className='pg-expense-input-form'>
        <AddExpenseViewSelectInput
          data={wallet}
          title='Wallet'
          dataCallback={expenseWalletData}
          initialData={initialSelectWallet}
        />
        <AddExpenseViewSelectInput
          data={categories}
          title='Category'
          dataCallback={expenseCategoryData}
          initialData={initialSelectCategory}
        />
        <AddExpenseViewTypingInput
          title='Amount'
          type='number'
          iconSrc='./assets/icons/notifications/notifications-cash.png'
          dataCallback={expenseAmountData}
          initialData={initialAmountInput}
        />
        <AddExpenseViewTypingInput
          title='Date'
          type='date'
          iconSrc='./assets/icons/notifications/notifications-date.png'
          dataCallback={expenseDateData}
          initialData={initialDateInput}
        />
        <AddExpenseViewTypingInput
          title='Note'
          type='text'
          iconSrc='./assets/icons/notifications/notifications-note.png'
          dataCallback={expenseNoteData}
          initialData={initialNoteInput}
        />
      </form>
    </div>
  );
};

export default AddExpenseViewInputBox;
