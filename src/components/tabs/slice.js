import { createSlice } from '@reduxjs/toolkit';


const tabSlice = createSlice({
	name: 'tab',

	initialState: {
		index: 0
	},

	reducers: {
		setTab: (state, tab) => {
			state.index = tab.payload;
		},
	},
});

export const { setTab } = tabSlice.actions;

export const selectTab = state => state.tab.index;

export default tabSlice.reducer;
