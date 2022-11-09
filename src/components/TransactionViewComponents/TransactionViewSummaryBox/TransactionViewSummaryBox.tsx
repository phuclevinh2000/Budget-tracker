import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { IncomingExpense } from '../../../types/types';

import './TransactionViewSummaryBox.scss';

import EmptyBoard from '../../CommonComponents/EmptyBoard/EmptyBoard';

const TransactionViewSummaryBox = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
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
              <p>{expense.amount.value} $</p>
            </div>
          ))
        ) : (
          <EmptyBoard />
        )}
      </div>
      <div className='pg-transaction-summary-box-sum'>
        <div className='pg-transaction-summary-box-flow'>
          <p>Inflow</p>
          <p className='pg-transaction-summary-box-inflow'>{inflowSum} $</p>
        </div>
        <div className='pg-transaction-summary-box-flow'>
          <p>Outflow</p>
          <p className='pg-transaction-summary-box-outflow'>-{outflowSum} $</p>
        </div>
        <div className='pg-transaction-summary-box-total'>
          {inflowSum - outflowSum} $
        </div>
      </div>
    </div>
  );
};

export default TransactionViewSummaryBox;
