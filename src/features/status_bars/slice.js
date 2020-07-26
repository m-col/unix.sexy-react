import { createSlice } from '@reduxjs/toolkit';


export const statusBarSlice = createSlice({
  name: 'statusBars',

	initialState: {
		top: {
			enabled: true,
			width: window.innerWidth * 0.98,
			height: 36,
			backgroundColor: "#030405",
			color: "#c5c5c8",
			xOffset: window.innerWidth * 0.01,
			yOffset: window.innerWidth * 0.01,
			cornerRadius: 3,
			shadows: true,
		},
		bottom: {
			enabled: false,
			width: window.innerWidth * 0.98,
			height: 36,
			backgroundColor: "#030405",
			color: "#c5c5c8",
			xOffset: window.innerWidth * 0.01,
			yOffset: window.innerWidth * 0.01,
			cornerRadius: 3,
			shadows: true,
		},
	},

  reducers: {
    toggle: (state, value) => {
			state[value.payload].enabled = !state[value.payload].enabled;
    },
    setWidth: (state, value) => {
			state[value.payload.id].width = value.payload.value;
    },
    setHeight: (state, value) => {
			state[value.payload.id].height = value.payload.value;
    },
    setColor: (state, value) => {
			state[value.payload.id].backgroundColor = value.payload.color;
    },
    setTextColor: (state, value) => {
			state[value.payload.id].color = value.payload.color;
    },
    setXOffset: (state, value) => {
			state[value.payload.id].xOffset = value.payload.value;
    },
    setYOffset: (state, value) => {
			state[value.payload.id].yOffset = value.payload.value;
    },
    setCornerRadius: (state, value) => {
			state[value.payload.id].cornerRadius = value.payload.value;
    },
    toggleShadows: (state, value) => {
			state[value.payload].shadows = !state[value.payload].shadows;
    },
  },
});

export const {
	toggle,
  setWidth,
  setHeight,
	setColor,
	setTextColor,
	setXOffset,
	setYOffset,
	setCornerRadius,
	toggleShadows,
} = statusBarSlice.actions;

export const selectStatusBars = state => state.statusBars;

export default statusBarSlice.reducer;
