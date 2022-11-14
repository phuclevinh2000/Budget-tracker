import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

import './HomeViewTransactionBox.scss';

import { IncomingExpense } from '../../../types/types';
import EmptyBoard from '../../CommonComponents/EmptyBoard/EmptyBoard';

const HomeViewTransactionBox = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  const currencyIconSrc = useSelector(
    (state: RootState) => state.expenseData.currency.iconSrc
  );

  return (
    <div className='pg-transaction-box-home'>
      <div className='pg-transaction-box-home-title'>
        Last five transactions
      </div>
      {myExpenses.length > 0 ? (
        <div className='pg-transaction-box-home-description'>
          {myExpenses
            .slice(-5)
            .reverse()
            .map((singleTransaction: IncomingExpense) => (
              <div
                key={singleTransaction.id}
                className='pg-transaction-box-home-group'
              >
                <span>
                  <img
                    src={singleTransaction.category.iconSrc}
                    alt='wallet'
                    className='pg-transaction-box-home-icon'
                  />
                  <div className='pg-transaction-box-home-info'>
                    <h3>{singleTransaction.category.value}</h3>
                    <p>{singleTransaction.date.value}</p>
                  </div>
                </span>
                <p
                  className={`pg-transaction-box-home-money ${singleTransaction.category.operation}`}
                >
                  {singleTransaction.amount.value}{' '}
                  <img
                    src={currencyIconSrc}
                    alt='currency'
                    className='pg-transaction-box-money-icon'
                  />
                </p>
              </div>
            ))}
        </div>
      ) : (
        <EmptyBoard />
      )}
    </div>
  );
};

export default HomeViewTransactionBox;
