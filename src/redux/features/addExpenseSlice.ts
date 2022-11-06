import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expense: null,
  isResetInput: false,
};

export const addExpenseSlice = createSlice({
  name: 'addExpenseData',
  initialState,
  reducers: {
    addExpenseOption: (state, action) => {
      state.expense = action.payload;
    },
    setIsResetInput: (state, action) => {
      state.isResetInput = action.payload;
    },
  },
});

export const { addExpenseOption, setIsResetInput } = addExpenseSlice.actions;

export default addExpenseSlice.reducer;
