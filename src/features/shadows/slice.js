import { createSlice } from '@reduxjs/toolkit';


export const shadowSlice = createSlice({
  name: 'shadows',

	initialState: {
		enabled: true,
		hOffset: 4,
		vOffset: 4,
		blur: 4,
		colour: '#000000',
	},

  reducers: {
    toggleShadows: state => {
			state.enabled = !state.enabled;
    },
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
	toggleShadows,
	setHOffset,
	setVOffset,
	setBlur,
	setColour
} = shadowSlice.actions;

export const selectShadowStyle = state => state.shadows;

export const selectShadowStyleCSS = state => {
	const { enabled, hOffset, vOffset, blur, colour } = state.shadows;
	if (enabled) {
		return {boxShadow: `${hOffset}px ${vOffset}px ${blur}px ${colour}`}
	} else {
		return null
	}
}

export default shadowSlice.reducer;
