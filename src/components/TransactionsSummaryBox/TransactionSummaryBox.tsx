import { RootState } from '../../redux/store';

import './TransactionSummaryBox.scss';

import { useSelector } from 'react-redux';

const TransactionSummaryBox = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );
  return <div>TransactionSummaryBox</div>;
};

export default TransactionSummaryBox;
