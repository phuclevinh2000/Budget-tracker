import './Transaction.scss';

import {
  TransactionViewExpenseReport,
  TransactionViewSummaryBox,
} from '../../../components';

const Transactions = () => {
  return (
    <div className='pg-transactions'>
      <div className='pg-transactions-title'>Total Transactions</div>
      <div className='pg-transaction-data'>
        <div className='pg-transactions-summary-section'>
          <TransactionViewSummaryBox />
        </div>
        <div className='pg-transaction-report'>
          <TransactionViewExpenseReport />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
