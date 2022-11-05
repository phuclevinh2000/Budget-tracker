import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wallet: null,
  category: null,
};

export const addExpenseSlice = createSlice({
  name: 'addExpense',
  initialState,
  reducers: {
    addExpenseWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const { addExpenseWallet } = addExpenseSlice.actions;

export default addExpenseSlice.reducer;
