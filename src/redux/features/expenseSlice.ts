import { createSlice } from '@reduxjs/toolkit';
import {
  IncomingExpenseSliceInitialState,
  IncomingCurrency,
} from '../../types/types';
import { currencyUnit } from '../../data/setting';

const expenseData =
  (localStorage.getItem('expenseData') || '{}') === '{}'
    ? {
        expense: [],
        isResetInput: false,
        darkMode: false,
        currency: {
          unit: 'euro',
          value: 1,
          iconSrc: './assets/icons/setting/currency-euro.png',
        },
      }
    : JSON.parse(localStorage.getItem('expenseData')!);

const initialState: IncomingExpenseSliceInitialState = expenseData;

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
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
      console.log(state.expense);

      localStorage.setItem('expenseData', JSON.stringify(state));
    },

    // Currently only support Euro => USD and USD => Euro
    changeCurrency: (state, action) => {
      const newCurrencyObject = currencyUnit.find(
        (option: IncomingCurrency) => option.unit === action.payload.newCurrency
      );

      const oldCurrencyObject = currencyUnit.find(
        (option: IncomingCurrency) => option.unit === action.payload.oldCurrency
      );

      for (const obj of state.expense) {
        if (newCurrencyObject && oldCurrencyObject)
          obj.amount.value =
            (obj.amount.value * newCurrencyObject.value) /
            oldCurrencyObject.value;
      }

      state.currency = newCurrencyObject;

      localStorage.setItem('expenseData', JSON.stringify(state));
    },
  },
});

export const {
  addExpenseOption,
  setIsResetInput,
  deleteExpenseOption,
  toggleDarkMode,
  changeCurrency,
} = expenseSlice.actions;

export default expenseSlice.reducer;
