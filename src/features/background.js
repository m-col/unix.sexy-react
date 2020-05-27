import { createSlice } from '@reduxjs/toolkit';

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    value: '#56f',
  },
  reducers: {
    setBackground: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const setBackground = backgroundSlice.actions.setBackground;

export const selectBackground = state => state.background.value;

export default backgroundSlice.reducer;
