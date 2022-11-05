import './BalanceBox.scss';

const BalanceBox = () => {
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
          <p className='pg-balance-money'>500.00$</p>
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
          <p>500.00$</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceBox;
