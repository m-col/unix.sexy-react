import { createSlice } from '@reduxjs/toolkit';


export const titleBarSlice = createSlice({
  name: 'titleBars',

	initialState: {
		enabled: true,
		position: "N",
		colour: '#252133',
		textColour: '#8d80d8',
		colourFocus: '#8d80d8',
		textColourFocus: '#12101d',
		width: 30,
	},

  reducers: {
    toggle: state => {
			state.enabled = !state.enabled;
    },
    setPosition: (state, value) => {
			state.position = value.payload
    },
    setColour: (state, value) => {
			state.colour = value.payload
    },
    setTextColour: (state, value) => {
			state.textColour = value.payload
    },
    setColourFocus: (state, value) => {
			state.colourFocus = value.payload
    },
    setTextColourFocus: (state, value) => {
			state.textColourFocus = value.payload
    },
    setWidth: (state, value) => {
			state.width = value.payload
    },
  },
});

export const {
	toggle,
	setPosition,
	setColour,
	setTextColour,
	setColourFocus,
	setTextColourFocus,
	setWidth,
} = titleBarSlice.actions;

export const selectTitleBars = state => state.titleBars;

export default titleBarSlice.reducer;
