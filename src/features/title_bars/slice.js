import { createSlice } from '@reduxjs/toolkit';


export const titleBarSlice = createSlice({
  name: 'titleBars',

	initialState: {
		enabled: true,
		colour: '#333333',
		width: 20,
	},

  reducers: {
    toggle: state => {
			state.enabled = !state.enabled;
    },
    setColour: (state, value) => {
			state.colour = value.payload
    },
    setWidth: (state, value) => {
			state.width = value.payload
    },
  },
});

export const {
	toggle,
	setColour,
	setWidth,
} = titleBarSlice.actions;

export const selectTitleBars = state => state.titleBars;

export const selectTitleBarsCSS = state => {
	const { colour, width } = state.titleBars;
	return {
		backgroundColor: colour,
		height: `${width}px`,
		width: "100%",
	}
}

export default titleBarSlice.reducer;
