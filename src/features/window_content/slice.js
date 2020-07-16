import { createSlice } from '@reduxjs/toolkit';


export const windowContentSlice = createSlice({
  name: 'windowContent',

	initialState: {
		colour: "#030405",
		textColour: "#c5c5c8",
		padding: 5,
	},

  reducers: {
		setColour: (state, input) => {
			if (input.payload) {
				state.colour = input.payload;
			}
		},
		setTextColour: (state, input) => {
			let colour = input.payload
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
	setTextColour,
	setPadding
} = windowContentSlice.actions;

export const selectWindowContent = state => state.windowContent;

export const selectWindowContentCSS = state => {
	const { colour, textColour, padding } = state.windowContent;
	return {
		backgroundColor: colour,
		color: textColour,
		padding: `${padding}px`,
	}
}

export default windowContentSlice.reducer;
