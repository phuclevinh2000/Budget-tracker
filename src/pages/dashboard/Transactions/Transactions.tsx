import './Transaction.scss';

import { TransactionSummaryBox } from '../../../components';

const Transactions = () => {
  return (
    <div className='pg-transactions'>
      <div className='pg-transactions-title'>Total Transactions</div>
      <div className='pg-transactions-summary-box'>
        <TransactionSummaryBox />
      </div>
    </div>
  );
};

export default Transactions;
