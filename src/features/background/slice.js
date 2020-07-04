import { createSlice } from '@reduxjs/toolkit';


export const backgroundSlice = createSlice({
	name: 'background',

	initialState: {
		colour: '#5d479d',
		wallpaper: "",
		tint: 0,
		tintColour: '#333333',
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
		setTintColour: (state, input) => {
			state.tintColour = input.payload;
		},
	},
});

export const {
	setBackground,
	setWallpaper,
	removeWallpaper,
	setTint,
	setTintColour,
} = backgroundSlice.actions;

export const selectBackground = state => state.background;

export default backgroundSlice.reducer;
