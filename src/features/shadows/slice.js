import { createSlice } from '@reduxjs/toolkit';


export const shadowSlice = createSlice({
  name: 'shadows',

	initialState: {
		hOffset: 3,
		vOffset: 3,
		blur: 8,
		colour: '#555555',
	},

  reducers: {
    setHOffset: (state, value) => {
			state.hOffset = value.payload
    },
    setVOffset: (state, value) => {
			state.vOffset = value.payload
    },
    setBlur: (state, value) => {
			state.blur = value.payload
    },
    setColour: (state, value) => {
			state.colour = value.payload
    },
  },
});

export const {
	setHOffset,
	setVOffset,
	setBlur,
	setColour
} = shadowSlice.actions;

export const selectShadowStyle = state => state.shadows;

export const selectShadowStyleCSS = state => {
	const { hOffset, vOffset, blur, colour } = state.shadows;
	return `${hOffset}px ${vOffset}px ${blur}px ${colour}`
}

export default shadowSlice.reducer;
