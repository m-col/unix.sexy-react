import { createSlice } from '@reduxjs/toolkit';


export const shadowSlice = createSlice({
  name: 'shadows',

	initialState: {
		enabled: true,
		hOffset: 4,
		vOffset: 4,
		blur: 4,
		color: '#000000',
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
    setColor: (state, value) => {
			state.color = value.payload
    },
  },
});

export const {
	toggleShadows,
	setHOffset,
	setVOffset,
	setBlur,
	setColor
} = shadowSlice.actions;

export const selectShadowStyle = state => state.shadows;

export const selectShadowStyleCSS = state => {
	const { enabled, hOffset, vOffset, blur, color } = state.shadows;
	if (enabled) {
		return {boxShadow: `${hOffset}px ${vOffset}px ${blur}px ${color}`}
	} else {
		return null
	}
}

export default shadowSlice.reducer;
