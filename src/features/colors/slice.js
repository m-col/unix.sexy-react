import { createSlice } from '@reduxjs/toolkit';


export const colorSlice = createSlice({
  name: 'colors',

	initialState: {
		background: "#030405",
		foreground: "#8742a5",
		color0: "#030405",
		color1: "#8742a5",
		color2: "#406794",
		color3: "#653c21",
		color4: "#8f4ff0",
		color5: "#5d479d",
		color6: "#3e3e73",
		color7: "#495068",
		color8: "#1f1c32",
		color9: "#9a5eb3",
		color10: "#5fd75f",
		color11: "#6e9fcd",
		color12: "#bd9ef9",
		color13: "#998dd1",
		color14: "#9a9dcc",
		color15: "#e1e1e4",
	},

  reducers: {
		setColor: (state, value) => {
			state[value.payload.id] = value.payload.color
    },
  },
});

export const { setColor } = colorSlice.actions;

export const selectColors = state => state.colors;

export default colorSlice.reducer;
