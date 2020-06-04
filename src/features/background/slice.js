import { createSlice } from '@reduxjs/toolkit';

import { fixColour } from '../helpers';


export const backgroundSlice = createSlice({
	name: 'background',

	initialState: {
		value: '#aaaaff',
		wallpaper: "",
	},

	reducers: {
		setBackground: (state, input) => {
			let colour = fixColour(input.payload)
			if (colour) {
				state.value = colour;
				state.wallpaper = null;
			}
		},

		setWallpaper: (state, image) => {
			state.wallpaper = image.payload;
		},
	},
});

export const { setBackground, setWallpaper } = backgroundSlice.actions;
export const selectBackground = state => state.background.value;
export const selectWallpaper = state => state.background.wallpaper;
export default backgroundSlice.reducer;
