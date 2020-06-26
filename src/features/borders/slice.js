import { createSlice } from '@reduxjs/toolkit';


export const borderSlice = createSlice({
  name: 'borders',

	initialState: {
		borderRadius: 3,
		borderWidth: 4,
		borderColor: '#8d80d8',
	},

  reducers: {
    setBorderRadius: (state, value) => {
			state.borderRadius = Number(value.payload)
			console.log(state.borderRadius)
    },
    setBorderWidth: (state, value) => {
			state.borderWidth = Number(value.payload)
    },
    setBordorColor: (state, value) => {
			state.borderColor = value.payload
    },
  },
});

export const {
	setBorderRadius,
	setBorderWidth,
	setBordorColor,
} = borderSlice.actions;

export const selectBorderStyle = state => state.borders;

export default borderSlice.reducer;
