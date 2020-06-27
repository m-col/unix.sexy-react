import { createSlice } from '@reduxjs/toolkit';


export const backgroundSlice = createSlice({
	name: 'background',

	initialState: {
		colour: '#5d479d',
		wallpaper: "",
		tint: 0,
	},

	reducers: {
		setBackground: (state, input) => {
			state.colour = input.payload;
		},
		setWallpaper: (state, image) => {
			state.wallpaper = image.payload;
		},
		removeWallpaper: state => {
			state.wallpaper = null;
		},
		setTint: (state, input) => {
			state.tint = input.payload;
		},
	},
});

export const {
	setBackground,
	setWallpaper,
	removeWallpaper,
	setTint,
} = backgroundSlice.actions;

export const selectBackground = state => state.background;

export default backgroundSlice.reducer;
