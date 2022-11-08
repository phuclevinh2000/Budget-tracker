import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import './TransactionExpenseReport.scss';

import EmptyBoard from '../EmptyBoard/EmptyBoard';
import ExpenseTransactionReportGroup from '../ExpenseTransactionReportGroup/ExpenseTransactionReportGroup';

const TransactionExpenseReport = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  return (
    <div className='pg-transaction-expense-report'>
      {myExpenses.length > 0 ? (
        myExpenses
          .slice()
          .reverse()
          .map((singleTransaction: any) => (
            <div key={singleTransaction.id}>
              <ExpenseTransactionReportGroup
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

export default TransactionExpenseReport;
