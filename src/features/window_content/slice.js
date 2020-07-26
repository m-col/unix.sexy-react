import { createSlice } from '@reduxjs/toolkit';


export const windowContentSlice = createSlice({
  name: 'windowContent',

	initialState: {
		color: "var(--background)",
		textColor: "var(--foreground)",
		padding: 5,
	},

  reducers: {
		setColor: (state, input) => {
			if (input.payload) {
				state.color = input.payload;
			}
		},
		setTextColor: (state, input) => {
			let color = input.payload
			if (color) {
				state.textColor = color;
			}
		},
    setPadding: (state, value) => {
			state.padding = value.payload
    },
  },
});

export const {
	setColor,
	setTextColor,
	setPadding
} = windowContentSlice.actions;

export const selectWindowContent = state => state.windowContent;

export const selectWindowContentCSS = state => {
	const { color, textColor, padding } = state.windowContent;
	return {
		backgroundColor: color,
		color: textColor,
		padding: `${padding}px`,
	}
}

export default windowContentSlice.reducer;
