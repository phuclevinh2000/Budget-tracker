import { useEffect, useState } from 'react';

import './AddExpenseInputBox.scss';

import ExpenseSelectInputObject from '../ExpenseSelectInputObject/ExpenseSelectInputObject';
import ExpenseTypingInputObject from '../ExpenseTypingInputObject/ExpenseTypingInputObject';
import {
  wallet,
  categories,
  initialSelectWallet,
  initialSelectCategory,
  initialAmountInput,
  initialDateInput,
  initialNoteInput,
} from '../../data';

const AddExpenseInputBox = ({ setExpenseData }: any) => {
  const [categoryData, setCategoryData] = useState<any>(initialSelectCategory);
  const [walletData, setWalletData] = useState<any>(initialSelectWallet);
  const [amountData, setAmountData] = useState(initialAmountInput);
  const [dateData, setDateData] = useState(initialDateInput);
  const [noteData, setNoteData] = useState(initialNoteInput);

  const expenseWalletData = (data: any) => {
    const walletFullData = wallet.find((option) => option.value === data);
    setWalletData(walletFullData);
  };

  const expenseCategoryData = (data: any) => {
    const categoryFullData = categories.find((option) => option.value === data);
    setCategoryData(categoryFullData);
  };

  const expenseAmountData = (data: any) => {
    data.id = 39;
    setAmountData(data);
  };

  const expenseDateData = (data: any) => {
    data.id = 40;
    setDateData(data);
  };

  const expenseNoteData = (data: any) => {
    data.id = 41;
    setNoteData(data);
  };

  useEffect(() => {
    const combineData = [
      walletData,
      categoryData,
      amountData,
      dateData,
      noteData,
    ];
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
        <ExpenseSelectInputObject
          data={wallet}
          title='Wallet'
          dataCallback={expenseWalletData}
        />
        <ExpenseSelectInputObject
          data={categories}
          title='Category'
          dataCallback={expenseCategoryData}
        />
        <ExpenseTypingInputObject
          title='Amount'
          type='number'
          iconSrc='./assets/icons/notifications/notifications-cash.png'
          dataCallback={expenseAmountData}
        />
        <ExpenseTypingInputObject
          title='Date'
          type='date'
          iconSrc='./assets/icons/notifications/notifications-date.png'
          dataCallback={expenseDateData}
        />
        <ExpenseTypingInputObject
          title='Note'
          type='text'
          iconSrc='./assets/icons/notifications/notifications-note.png'
          dataCallback={expenseNoteData}
        />
      </form>
    </div>
  );
};

export default AddExpenseInputBox;
