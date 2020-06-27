import { createSlice } from '@reduxjs/toolkit';


export const windowSlice = createSlice({
  name: 'windows',

	initialState: [
		{ x: 400, y: 150, width: 440, height: 300 },
		{ x: 580, y: 480, width: 260, height: 240 },
	],

  reducers: {
    addWindow: state => {
			state.push(
				{
					x: 25,
					y: 25,
					width: 340,
					height: 220,
				}
			)
    },

    delWindow: state => {
			state.pop()
    },

    dragWindow: (state, action) => {
			state[action.payload.key].x = action.payload.x
			state[action.payload.key].y = action.payload.y
    },

    resizeWindow: (state, action) => {
			state[action.payload.key].width += action.payload.d.width
			state[action.payload.key].height += action.payload.d.height
    },
  },
});

export const { addWindow, delWindow, dragWindow, resizeWindow } = windowSlice.actions;

export const selectPositions = state => state.windows;

export default windowSlice.reducer;
