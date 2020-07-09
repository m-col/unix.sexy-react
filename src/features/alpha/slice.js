import { createSlice } from '@reduxjs/toolkit';


export const alphaSlice = createSlice({
  name: 'alpha',

	initialState: {
		value: 100,
		valueFocus: 100,
	},

  reducers: {
    setAlpha: (state, value) => {
			state.value = value.payload
    },
    setAlphaFocus: (state, value) => {
			state.valueFocus = value.payload
    },
  },
});

export const { setAlpha, setAlphaFocus } = alphaSlice.actions;

export const selectAlpha = state => state.alpha;

export const selectAlphaStyle = state => {
	return {
		opacity: state.alpha.value / 100
	}
}

export const selectAlphaFocusStyle = state => {
	return {
		opacity: state.alpha.valueFocus / 100
	}
}

export default alphaSlice.reducer;
