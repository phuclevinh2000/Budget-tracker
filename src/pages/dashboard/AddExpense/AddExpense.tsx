import './AddExpense.scss';

import { AddExpenseInputBox } from '../../../components';

const AddExpense = () => {
  return (
    <div className='pg-add-expense'>
      <div className='pg-add-expense-box'>
        <AddExpenseInputBox />
      </div>
      <button className='pg-add-expense-button'>Save</button>
    </div>
  );
};

export default AddExpense;
