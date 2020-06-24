import { createSlice } from '@reduxjs/toolkit';

import { fixColour } from 'features/helpers';


export const windowContentSlice = createSlice({
  name: 'windowContent',

	initialState: {
		colour: "#ccc",
		text: true,
		textColour: "#777",
		padding: 5,
	},

  reducers: {
		setColour: (state, input) => {
			let colour = fixColour(input.payload)
			if (colour) {
				state.colour = colour;
			}
		},

    toggleText: state => {
			state.text = !state.text;
    },

		setTextColour: (state, input) => {
			let colour = fixColour(input.payload)
			if (colour) {
				state.textColour = colour;
			}
		},

    setPadding: (state, value) => {
			state.padding = value.payload
    },
  },
});

export const {
	setColour,
	toggleText,
	setTextColour,
	setPadding
} = windowContentSlice.actions;

export const selectWindowContent = state => state.windowContent;

export const selectWindowContentCSS = state => {
	const { colour, textColour, padding } = state.windowContent;
	return {
		backgroundColor: colour,
		color: textColour,
		padding: `${padding}px`
	}
}

export default windowContentSlice.reducer;
