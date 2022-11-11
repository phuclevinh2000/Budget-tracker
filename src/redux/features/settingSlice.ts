import { createSlice } from '@reduxjs/toolkit';

const settingData =
  (localStorage.getItem('settingData') || '{}') === '{}'
    ? {
        darkMode: false,
      }
    : JSON.parse(localStorage.getItem('settingData')!);

const initialState = settingData;

export const settingSlice = createSlice({
  name: 'settingData',
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;

      localStorage.setItem('settingData', JSON.stringify(state));
    },
  },
});

export const { toggleDarkMode } = settingSlice.actions;

export default settingSlice.reducer;
