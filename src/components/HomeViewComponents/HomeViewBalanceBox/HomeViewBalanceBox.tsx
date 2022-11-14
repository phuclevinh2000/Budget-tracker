import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { IncomingExpense } from '../../../types/types';

import './HomeViewBalanceBox.scss';

const HomeViewBalanceBox = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  const currencyIconSrc = useSelector(
    (state: RootState) => state.expenseData.currency.iconSrc
  );

  const cardExpenses = myExpenses.filter(
    (expense: IncomingExpense) => expense.wallet.value === 'card'
  );

  const totalCardExpense = cardExpenses.reduce(
    (particialSum: number, a: IncomingExpense) =>
      particialSum +
      (a.category.operation === 'minus'
        ? -Number(a.amount.value)
        : Number(a.amount.value)),
    0
  );

  const cashExpenses = myExpenses.filter(
    (expense: IncomingExpense) => expense.wallet.value === 'cash'
  );

  const totalCashExpense = cashExpenses.reduce(
    (particialSum: number, a: IncomingExpense) =>
      particialSum +
      (a.category.operation === 'minus'
        ? -Number(a.amount.value)
        : Number(a.amount.value)),
    0
  );

  return (
    <div className='pg-balance-box'>
      <div className='pg-balance-box-title'>My Wallets</div>
      <div className='pg-balance-box-description'>
        <div className='pg-balance-box-group'>
          <span>
            <img
              src='./assets/icons/notifications/notifications-wallets.png'
              alt='wallet'
              className='pg-balance-box-icon'
            />
            <p>Cash</p>
          </span>
          <p
            className={`pg-balance-money ${
              totalCashExpense <= 0 ? 'minus' : 'plus'
            }`}
          >
            {totalCashExpense.toFixed(2)}{' '}
            <img
              src={currencyIconSrc}
              alt='currency'
              className='pg-balance-money-icon'
            />
          </p>
        </div>
        <div className='pg-balance-box-group'>
          <span>
            <img
              src='./assets/icons/notifications/notifications-cards.png'
              alt='wallet'
              className='pg-balance-box-icon'
            />
            <p>Card</p>
          </span>
          <p
            className={`pg-balance-money ${
              totalCardExpense <= 0 ? 'minus' : 'plus'
            }`}
          >
            {totalCardExpense.toFixed(2)}
            <img
              src={currencyIconSrc}
              alt='currency'
              className='pg-balance-money-icon'
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeViewBalanceBox;
