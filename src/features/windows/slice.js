import { createSlice } from '@reduxjs/toolkit';


export const windowSlice = createSlice({
  name: 'windows',

	initialState: [
		{ x: 320, y: 200, width: 280, height: 140 },
		{ x: 640, y:  60, width: 140, height: 280 },
		{ x: 640, y: 380, width: 280, height: 140 },
		{ x: 460, y: 380, width: 140, height: 280 },
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
