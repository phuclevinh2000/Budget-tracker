import './TransactionBox.scss';

const TransactionBox = () => {
  return (
    <div className='pg-transaction-box'>
      <div className='pg-transaction-box-title'>Recent Transaction</div>
      <div className='pg-transaction-box-description'>
        <div className='pg-transaction-box-group'>
          <span>
            <img
              src='./assets/icons/notifications/notifications-wallets.png'
              alt='wallet'
              className='pg-transaction-box-icon'
            />
            <div className='pg-transaction-box-info'>
              <h3>Pay Interest</h3>
              <p>Thursday, 03 November 2022</p>
            </div>
          </span>
          <p className='pg-transaction-money'>500.00$</p>
        </div>
        <div className='pg-transaction-box-group'>
          <span>
            <img
              src='./assets/icons/notifications/notifications-wallets.png'
              alt='wallet'
              className='pg-transaction-box-icon'
            />
            <div className='pg-transaction-box-info'>
              <h3>Pay Interest</h3>
              <p>Thursday, 03 November 2022</p>
            </div>
          </span>
          <p className='pg-transaction-money'>500.00$</p>
        </div>
        <div className='pg-transaction-box-group'>
          <span>
            <img
              src='./assets/icons/notifications/notifications-wallets.png'
              alt='wallet'
              className='pg-transaction-box-icon'
            />
            <div className='pg-transaction-box-info'>
              <h3>Pay Interest</h3>
              <p>Thursday, 03 November 2022</p>
            </div>
          </span>
          <p className='pg-transaction-money'>500.00$</p>
        </div>
        <div className='pg-transaction-box-group'>
          <span>
            <img
              src='./assets/icons/notifications/notifications-wallets.png'
              alt='wallet'
              className='pg-transaction-box-icon'
            />
            <div className='pg-transaction-box-info'>
              <h3>Pay Interest</h3>
              <p>Thursday, 03 November 2022</p>
            </div>
          </span>
          <p className='pg-transaction-money'>500.00$</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionBox;
