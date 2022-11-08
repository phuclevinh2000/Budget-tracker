import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import './TransactionBoxHomePage.scss';

import EmptyBoard from '../EmptyBoard/EmptyBoard';

const TransactionBoxHomePage = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
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
            .map((singleTransaction: any) => (
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
                  {singleTransaction.amount.value} $
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

export default TransactionBoxHomePage;
