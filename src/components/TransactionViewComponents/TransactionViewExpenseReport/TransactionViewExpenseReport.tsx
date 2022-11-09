import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

import './TransactionViewExpenseReport.scss';

import { IncomingExpense } from '../../../types/types';
import EmptyBoard from '../../CommonComponents/EmptyBoard/EmptyBoard';
import TransactionViewDetailReport from '../TransactionViewDetailReport/TransactionViewDetailReport';

const TransactionViewExpenseReport = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  return (
    <div className='pg-transaction-expense-report'>
      {myExpenses.length > 0 ? (
        myExpenses
          .slice()
          .reverse()
          .map((singleTransaction: IncomingExpense) => (
            <div key={singleTransaction.id}>
              <TransactionViewDetailReport
                singleTransaction={singleTransaction}
              />
            </div>
          ))
      ) : (
        <EmptyBoard />
      )}
    </div>
  );
};

export default TransactionViewExpenseReport;
