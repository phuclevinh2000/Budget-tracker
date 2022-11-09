import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

import './Navbar.scss';

import { IncomingExpense } from '../../../types/types';

const Navbar = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  const inflowExpense = myExpenses.filter(
    (expense: IncomingExpense) => expense.category.operation === 'plus'
  );

  const outflowExpense = myExpenses.filter(
    (expense: IncomingExpense) => expense.category.operation === 'minus'
  );

  const inflowSum = inflowExpense.reduce(
    (particialSum: number, a: IncomingExpense) =>
      particialSum + Number(a.amount.value),
    0
  );

  const outflowSum = outflowExpense.reduce(
    (particialSum: number, a: IncomingExpense) =>
      particialSum + Number(a.amount.value),
    0
  );
  return (
    <div className='pg-navbar'>
      <div className='pg-navbar-save-space'>
        <img
          src='./assets/icons/notifications/notifications-global.png'
          alt='global'
        />
        <div className='pg-navbar-total'>
          <p className='pg-navbar-total-title'>Total</p>
          <p className='pg-navbar-total-calculate'>
            {inflowSum - outflowSum} $
          </p>
        </div>
      </div>
      <h3 className='pg-navbar-text'>dashboard</h3>
      <span className='pg-navbar-user'>
        <img
          src='./assets/icons/notifications/notifications-profile-logo.png'
          alt='user'
        />
        <p className='pg-navbar-user-name'>user</p>
      </span>
    </div>
  );
};

export default Navbar;
