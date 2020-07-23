import { createSlice } from '@reduxjs/toolkit';

import { enable } from 'features/context_menus/slice';


const focusSlice = createSlice({
	name: 'focus',

	initialState: {
		id: 0,
	},

	reducers: {
		setFocus: (state, action) => {
			state.id = action.payload;
		},
	},
	extraReducers: {
    [enable]: (state, action) => {
			state.id = action.payload.id;
    }
  }
});

export const { setFocus } = focusSlice.actions;

export const selectFocus = state => state.focus.id;

export default focusSlice.reducer;
