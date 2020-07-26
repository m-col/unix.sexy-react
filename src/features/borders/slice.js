import { createSlice } from '@reduxjs/toolkit';


export const borderSlice = createSlice({
  name: 'borders',

	initialState: {
		borderRadius: 3,
		borderWidth: 4,
		borderColor: 'var(--color12)',
		borderColorFocus: 'var(--color13)',
	},

  reducers: {
    setBorderRadius: (state, value) => {
			state.borderRadius = Number(value.payload)
    },
    setBorderWidth: (state, value) => {
			state.borderWidth = Number(value.payload)
    },
    setBorderColor: (state, value) => {
			state.borderColor = value.payload
    },
    setBorderColorFocus: (state, value) => {
			state.borderColorFocus = value.payload
    },
  },
});

export const {
	setBorderRadius,
	setBorderWidth,
	setBorderColor,
	setBorderColorFocus,
} = borderSlice.actions;

export const selectBorderStyle = state => state.borders;

export const selectBorderFocusStyle = state => {
	const style = Object.assign({}, state.borders);
	style.borderColor = style.borderColorFocus;
	return style;
}

export default borderSlice.reducer;
