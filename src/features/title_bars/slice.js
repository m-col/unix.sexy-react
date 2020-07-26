import { createSlice } from '@reduxjs/toolkit';


export const titleBarSlice = createSlice({
  name: 'titleBars',

	initialState: {
		enabled: true,
		position: "N",
		color: 'var(--color12)',
		textColor: 'var(--color13)',
		colorFocus: 'var(--color13)',
		textColorFocus: 'var(--color12)',
		width: 20,
	},

  reducers: {
    toggle: state => {
			state.enabled = !state.enabled;
    },
    setPosition: (state, value) => {
			state.position = value.payload
    },
    setColor: (state, value) => {
			state.color = value.payload
    },
    setTextColor: (state, value) => {
			state.textColor = value.payload
    },
    setColorFocus: (state, value) => {
			state.colorFocus = value.payload
    },
    setTextColorFocus: (state, value) => {
			state.textColorFocus = value.payload
    },
    setWidth: (state, value) => {
			state.width = value.payload
    },
  },
});

export const {
	toggle,
	setPosition,
	setColor,
	setTextColor,
	setColorFocus,
	setTextColorFocus,
	setWidth,
} = titleBarSlice.actions;

export const selectTitleBars = state => state.titleBars;

export default titleBarSlice.reducer;
