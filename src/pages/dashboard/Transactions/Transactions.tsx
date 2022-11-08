import './Transaction.scss';

import {
  TransactionExpenseReport,
  TransactionSummaryBox,
} from '../../../components';

const Transactions = () => {
  return (
    <div className='pg-transactions'>
      <div className='pg-transactions-title'>Total Transactions</div>
      <div className='pg-transaction-data'>
        <div className='pg-transactions-summary-section'>
          <TransactionSummaryBox />
        </div>
        <div className='pg-transaction-report'>
          <TransactionExpenseReport />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
