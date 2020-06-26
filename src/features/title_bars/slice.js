import { createSlice } from '@reduxjs/toolkit';


export const titleBarSlice = createSlice({
  name: 'titleBars',

	initialState: {
		enabled: true,
		colour: '#8d80d8',
		textColour: '#030405',
		width: 20,
	},

  reducers: {
    toggle: state => {
			state.enabled = !state.enabled;
    },
    setColour: (state, value) => {
			state.colour = value.payload
    },
    setTextColour: (state, value) => {
			state.textColour = value.payload
    },
    setWidth: (state, value) => {
			state.width = value.payload
    },
  },
});

export const {
	toggle,
	setColour,
	setTextColour,
	setWidth,
} = titleBarSlice.actions;

export const selectTitleBars = state => state.titleBars;

export const selectTitleBarsCSS = state => {
	const { colour, textColour, width } = state.titleBars;
	return {
		backgroundColor: colour,
		height: `${width}px`,
		width: "100%",
		color: textColour,
	}
}

export default titleBarSlice.reducer;
