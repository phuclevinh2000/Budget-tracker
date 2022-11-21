import { RootState } from '../../../redux/store';
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

import './HomeViewReportGraph.scss';

import EmptyBoard from '../../CommonComponents/EmptyBoard/EmptyBoard';

const HomeViewReportGraph = () => {
  const myExpenses = useSelector(
    (state: RootState) => state.expenseData.expense
  );

  const lastFiveExpense = myExpenses.slice(-3).reverse();

  const incomeMoney = myExpenses.reduce(
    (particialSum: number, currentValue: any) => {
      const value =
        currentValue?.category?.operation === 'plus'
          ? currentValue.amount.value
          : 0;
      return particialSum + value;
    },
    0
  );

  const outcomeMoney = myExpenses.reduce(
    (particialSum: number, currentValue: any) => {
      const value =
        currentValue.category.operation === 'minus'
          ? currentValue.amount.value
          : 0;
      return particialSum + value;
    },
    0
  );

  const dataForGraph = [
    { name: 'Income', value: incomeMoney },
    { name: 'Outcome', value: outcomeMoney },
  ];

  return (
    <div className='pg-home-report-component'>
      <p className='pg-home-report-component-title'>Income and Outcome graph</p>
      {lastFiveExpense.length > 0 ? (
        <ResponsiveContainer width='100%' height={110}>
          <BarChart data={dataForGraph}>
            <CartesianGrid strokeDasharray='3 3 ' />
            <XAxis dataKey='name' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='value' fill='#2cb1bc' barSize={75} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <EmptyBoard />
      )}
    </div>
  );
};

export default HomeViewReportGraph;
