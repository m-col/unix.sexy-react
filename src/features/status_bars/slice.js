import { createSlice } from '@reduxjs/toolkit';


export const statusBarSlice = createSlice({
  name: 'statusBars',

	initialState: {
		position: "top",
		width: window.innerWidth * 0.98,
		height: 36,
		backgroundColor: "#030405",
		color: "#c5c5c8",
		xOffset: window.innerWidth * 0.01,
		yOffset: window.innerWidth * 0.01,
		cornerRadius: 0,
		shadows: true,
	},

  reducers: {
    setPosition: (state, value) => {
			state.position = value.payload;
    },
    setWidth: (state, value) => {
			state.width = value.payload;
    },
    setHeight: (state, value) => {
			state.height = value.payload;
    },
    setColour: (state, value) => {
			state.backgroundColor = value.payload;
    },
    setTextColour: (state, value) => {
			state.color = value.payload;
    },
    setXOffset: (state, value) => {
			state.xOffset = value.payload;
    },
    setYOffset: (state, value) => {
			state.yOffset = value.payload;
    },
    setCornerRadius: (state, value) => {
			state.cornerRadius = value.payload;
    },
    toggleShadows: (state, value) => {
			state.shadows = !state.shadows;
    },
  },
});

export const {
	setPosition,
  setWidth,
  setHeight,
	setColour,
	setTextColour,
	setXOffset,
	setYOffset,
	setCornerRadius,
	toggleShadows,
} = statusBarSlice.actions;

export const selectStatusBars = state => state.statusBars;

export default statusBarSlice.reducer;
