import { useEffect, useState } from 'react';

import './AddExpenseInputBox.scss';

import ExpenseSelectInputObject from '../ExpenseSelectInputObject/ExpenseSelectInputObject';
import ExpenseTypingInputObject from '../ExpenseTypingInputObject/ExpenseTypingInputObject';
import { wallet, categories } from '../../data';

const AddExpenseInputBox = () => {
  const [categoryData, setCategoryData] = useState<any>();
  const [walletData, setWalletData] = useState<any>();
  const [amountData, setAmountData] = useState();
  const [dateData, setDateData] = useState();
  const [noteData, setNoteData] = useState();

  const expenseWalletData = (data: any) => {
    const walletFullData = wallet.find((option) => option.label === data);
    setWalletData(walletFullData);
  };

  const expenseCategoryData = (data: any) => {
    const categoryFullData = categories.find((option) => option.label === data);
    setCategoryData(categoryFullData);
  };

  const expenseAmountData = (data: any) => {
    setAmountData(data);
  };

  const expenseDateData = (data: any) => {
    setDateData(data);
  };

  const expenseNoteData = (data: any) => {
    setNoteData(data);
  };

  useEffect(() => {
    const combineData = [
      categoryData,
      walletData,
      amountData,
      dateData,
      noteData,
    ];

    console.log(combineData);
  }, [amountData, categoryData, dateData, noteData, walletData]);
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
        {/* <ExpenseInputObject title='Amount' type='number' data='10' />
        <ExpenseInputObject
          title='Date'
          // iconSrc='./assets/icons/notifications/notifications-date.png'
          type='date'
          data='10/10/2020'
        />
        <ExpenseInputObject
          title='Note'
          iconSrc='./assets/icons/notifications/notifications-note.png'
          type='text'
          data='hjhjhjhj'
        /> */}
      </form>
    </div>
  );
};

export default AddExpenseInputBox;
