import { createSlice } from '@reduxjs/toolkit';

import { fixColour } from 'features/helpers';


export const windowContentSlice = createSlice({
  name: 'windowContent',

	initialState: {
		colour: "#030405",
		text: true,
		textColour: "#c5c5c8",
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
	const { colour, textColour } = state.windowContent;
	return {
		backgroundColor: colour,
		color: textColour,
	}
}

export default windowContentSlice.reducer;
