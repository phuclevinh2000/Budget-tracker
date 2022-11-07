import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  expense: [],
  isResetInput: false,
};

export const addExpenseSlice = createSlice({
  name: 'addExpenseData',
  initialState,
  reducers: {
    addExpenseOption: (state, action) => {
      state.expense.push(action.payload);
    },
    setIsResetInput: (state, action) => {
      state.isResetInput = action.payload;
    },
  },
});

export const { addExpenseOption, setIsResetInput } = addExpenseSlice.actions;

export default addExpenseSlice.reducer;
