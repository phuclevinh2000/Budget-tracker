import { createSlice } from '@reduxjs/toolkit';
import { IncomingExpenseSliceInitialState } from '../../types/types';

const expenseData =
  (localStorage.getItem('expenseData') || '{}') === '{}'
    ? {
        expense: [],
        isResetInput: false,
      }
    : JSON.parse(localStorage.getItem('expenseData')!);

const initialState: IncomingExpenseSliceInitialState = expenseData;
console.log(expenseData);

export const expenseSlice = createSlice({
  name: 'expenseData',
  initialState,
  reducers: {
    addExpenseOption: (state, action) => {
      state.expense.push(action.payload);

      localStorage.setItem('expenseData', JSON.stringify(state));
    },
    setIsResetInput: (state, action) => {
      state.isResetInput = action.payload;
    },

    deleteExpenseOption: (state, action) => {
      // Filter the options
      const filteredExpense = state.expense.filter(
        (option: any) => option.id !== action.payload
      );
      state.expense = filteredExpense;
    },
  },
});

export const { addExpenseOption, setIsResetInput, deleteExpenseOption } =
  expenseSlice.actions;

export default expenseSlice.reducer;
