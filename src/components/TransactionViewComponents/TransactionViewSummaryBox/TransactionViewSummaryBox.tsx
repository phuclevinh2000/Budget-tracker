import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { IncomingExpense } from '../../../types/types';

import './TransactionViewSummaryBox.scss';

import EmptyBoard from '../../CommonComponents/EmptyBoard/EmptyBoard';

const TransactionViewSummaryBox = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  const currencyIconSrc = useSelector(
    (state: RootState) => state.expenseData.currency.iconSrc
  );

  const inflowExpense = myExpenses.filter(
    (expense: IncomingExpense) => expense.category.operation === 'plus'
  );

  const outflowExpense = myExpenses.filter(
    (expense: IncomingExpense) => expense.category.operation === 'minus'
  );

  const inflowSum = inflowExpense.reduce(
    (particialSum: number, a: IncomingExpense) =>
      particialSum + Number(a.amount.value),
    0
  );

  const outflowSum = outflowExpense.reduce(
    (particialSum: number, a: IncomingExpense) =>
      particialSum + Number(a.amount.value),
    0
  );

  const topExpenses = myExpenses
    .slice()
    .sort(function (a: IncomingExpense, b: IncomingExpense) {
      return Number(b.amount.value) - Number(a.amount.value);
    })
    .slice(0, 2);

  return (
    <div className='pg-transaction-summary-box'>
      <div className='pg-transaction-summary-box-top-expense'>
        <div className='pg-transaction-summary-box-top-expense-title'>
          Top expense
        </div>
        {myExpenses.length > 0 ? (
          topExpenses.map((expense: IncomingExpense) => (
            <div
              key={expense.id}
              className='pg-transaction-summary-box-top-expense-item'
            >
              <p>{expense.category.value}</p>
              <p>
                {expense.amount.value}{' '}
                <img
                  src={currencyIconSrc}
                  alt='currency'
                  className='pg-transaction-summary-box-money-icon'
                />
              </p>
            </div>
          ))
        ) : (
          <EmptyBoard />
        )}
      </div>
      <div className='pg-transaction-summary-box-sum'>
        <div className='pg-transaction-summary-box-flow'>
          <p>Inflow</p>
          <p className='pg-transaction-summary-box-inflow'>
            {inflowSum.toFixed(2)}{' '}
            <img
              src={currencyIconSrc}
              alt='currency'
              className='pg-balance-money-icon'
            />
          </p>
        </div>
        <div className='pg-transaction-summary-box-flow'>
          <p>Outflow</p>
          <p className='pg-transaction-summary-box-outflow'>
            -{outflowSum.toFixed(2)}{' '}
            <img
              src={currencyIconSrc}
              alt='currency'
              className='pg-balance-money-icon'
            />
          </p>
        </div>
        <div className='pg-transaction-summary-box-total'>
          {(inflowSum - outflowSum).toFixed(2)}{' '}
          <img
            src={currencyIconSrc}
            alt='currency'
            className='pg-balance-money-icon'
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionViewSummaryBox;
