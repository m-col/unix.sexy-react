import { createSlice } from '@reduxjs/toolkit';


export const backgroundSlice = createSlice({
	name: 'background',

	initialState: {
		color: '#5d479d',
		wallpaper: "",
		tint: 0,
		tintColor: '#333333',
	},

	reducers: {
		setBackground: (state, input) => {
			state.color = input.payload;
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
		setTintColor: (state, input) => {
			state.tintColor = input.payload;
		},
	},
});

export const {
	setBackground,
	setWallpaper,
	removeWallpaper,
	setTint,
	setTintColor,
} = backgroundSlice.actions;

export const selectBackground = state => state.background;

export default backgroundSlice.reducer;
