import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './HomeReport.scss';

const HomeReport = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  const lastFiveExpense = myExpenses.slice(-3).reverse();

  return (
    <div className='pg-home-report-component'>
      Last three transactions
      <ResponsiveContainer width='100%' height={120}>
        <BarChart data={lastFiveExpense} margin={{ top: 20 }}>
          <CartesianGrid strokeDasharray='3 3 ' />
          <XAxis dataKey='category.value' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar
            name='Amount ($)'
            dataKey='amount.value'
            fill='#2cb1bc'
            barSize={75}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HomeReport;
