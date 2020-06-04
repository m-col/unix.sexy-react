import { createSlice } from '@reduxjs/toolkit';

import { fixColour } from './helpers';


export const backgroundSlice = createSlice({
  name: 'background',

  initialState: {
    value: '#aaaaff',
		wallpaper: null,
  },

  reducers: {
    setBackground: (state, action) => {
			let colour = fixColour(action.payload)
			if (colour) {
				state.value = colour;
			}
    },
    setWallpaper: (state, action) => {
			state.wallpaper = action.payload;
    },
  },
});

export const { setBackground, setWallpaper } = backgroundSlice.actions;

export const selectBackground = state => state.background.value;
export const selectWallpaper = state => state.background.wallpaper;

export default backgroundSlice.reducer;
