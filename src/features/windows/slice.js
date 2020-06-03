import { createSlice } from '@reduxjs/toolkit';

export const windowSlice = createSlice({
  name: 'windows',
  initialState: {
    count: 2,
  },
  reducers: {
    addWindow: state => {
      state.count += 1;
    },
    delWindow: state => {
      state.count -= 1;
    },
  },
});

export const { addWindow, delWindow } = windowSlice.actions;

export const selectWindowCount = state => state.windows.count;

export default windowSlice.reducer;
