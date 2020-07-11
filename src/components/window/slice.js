import { createSlice } from '@reduxjs/toolkit';


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
});

export const { setFocus } = focusSlice.actions;

export const selectFocus = state => state.focus.id;

export default focusSlice.reducer;
