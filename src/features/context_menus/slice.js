import { createSlice } from '@reduxjs/toolkit';


export const contextMenuSlice = createSlice({
  name: 'contextMenus',

	initialState: {
		status_bar_top: {enabled: false, x: 0, y: 0},
		status_bar_bottom: {enabled: false, x: 0, y: 0},
		title_bar: {enabled: false, x: 0, y: 0},
		background: {enabled: false, x: 0, y: 0},
	},

  reducers: {
    enable: (state, action) => {
			const e = action.payload.e;
			e.preventDefault();
			state[action.payload.id] = {
				enabled: true,
				x: e.clientX,
				y: e.clientY,
			};
			e.stopPropagation();
    },
    disable: (state, action) => {
			state[action.payload].enabled = false;
    },
    dragMenu: (state, action) => {
			state[action.payload.id].x = action.payload.x;
			state[action.payload.id].y = action.payload.y;
    },
  },
});

export const {
	enable,
	disable,
	dragMenu,
} = contextMenuSlice.actions;

export const selectContextMenus = state => state.contextMenus;

export default contextMenuSlice.reducer;
