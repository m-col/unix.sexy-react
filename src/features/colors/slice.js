import { createSlice } from '@reduxjs/toolkit';


export const colorSlice = createSlice({
  name: 'colors',

	initialState: [
		"#030405",
		"#8742a5",
		"#406794",
		"#653c21",
		"#8f4ff0",
		"#5d479d",
		"#3e3e73",
		"#495068",
		"#1f1c32",
		"#9a5eb3",
		"#5fd75f",
		"#6e9fcd",
		"#bd9ef9",
		"#998dd1",
		"#9a9dcc",
		"#e1e1e4",
	],

  reducers: {
		setColor: (state, value) => {
			state[value.payload.id] = value.payload.color
    },
  },
});

export const {
	dragMenu,
} = colorSlice.actions;

export const selectColors = state => state.colors;

export default colorSlice.reducer;
