import { createSlice } from '@reduxjs/toolkit';


export const panelSlice = createSlice({
  name: 'panel',

	initialState: {
		x: 870,
		y: 363,
	},

  reducers: {
    dragPanel: (state, action) => {
			state.x = action.payload.x
			state.y = action.payload.y
    },
  },
});

export const {
	dragPanel,
} = panelSlice.actions;

export const selectPanel = state => state.panel;

export default panelSlice.reducer;
