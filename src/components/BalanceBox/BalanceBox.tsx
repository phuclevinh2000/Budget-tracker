import { RootState } from '../../redux/store';

import './BalanceBox.scss';

import { useSelector } from 'react-redux';

const BalanceBox = () => {
  const myWallet = useSelector((state: RootState) => state.expenseData.wallet);

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
              myWallet.cash <= 0 ? 'minus' : 'plus'
            }`}
          >
            {myWallet.cash} $
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
              myWallet.card <= 0 ? 'minus' : 'plus'
            }`}
          >
            {myWallet.card} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceBox;
