import { createSlice } from '@reduxjs/toolkit';


export const backgroundSlice = createSlice({
	name: 'background',

	initialState: {
		colour: '#5d479d',
		wallpaper: "",
	},

	reducers: {
		setBackground: (state, input) => {
			state.colour = input.payload;
			state.wallpaper = null;
		},

		setWallpaper: (state, image) => {
			state.wallpaper = image.payload;
		},
	},
});

export const { setBackground, setWallpaper } = backgroundSlice.actions;

export const selectBackground = state => state.background.colour;

export const selectWallpaper = state => state.background.wallpaper;

export default backgroundSlice.reducer;
