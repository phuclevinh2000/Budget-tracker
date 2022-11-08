import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  expense: [],
  isResetInput: false,
  wallet: {
    cash: 0,
    card: 0,
  },
  graphData: [],
};

export const expenseSlice = createSlice({
  name: 'expenseData',
  initialState,
  reducers: {
    addExpenseOption: (state, action) => {
      state.expense.push(action.payload);

      // Check if the user select cash or card
      const typeOfWallet = action.payload.wallet.value;
      const typeOfExpense = action.payload.category.operation;

      if (typeOfWallet === 'cash' && typeOfExpense === 'plus') {
        state.wallet.cash += action.payload.amount.value;
      } else if (typeOfWallet === 'cash' && typeOfExpense === 'minus') {
        state.wallet.cash -= action.payload.amount.value;
      } else if (typeOfWallet === 'card' && typeOfExpense === 'plus') {
        state.wallet.card += action.payload.amount.value;
      } else {
        state.wallet.card -= action.payload.amount.value;
      }
    },
    setIsResetInput: (state, action) => {
      state.isResetInput = action.payload;
    },

    addGraphData: (state, action) => {
      state.graphData.push(action.payload);
    },
  },
});

export const { addExpenseOption, setIsResetInput, addGraphData } =
  expenseSlice.actions;

export default expenseSlice.reducer;
