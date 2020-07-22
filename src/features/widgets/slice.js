import { createSlice } from '@reduxjs/toolkit';


const _widget = { padding: 10, backgroundColor: null, color: null, text: "一" };


export const widgetSlice = createSlice({
  name: 'widgets',

	initialState: {
		top: {
			left: [
				{ padding: 10, backgroundColor: null, color: null, text: "一" },
				{ padding: 10, backgroundColor: null, color: null, text: "二" },
				{ padding: 10, backgroundColor: null, color: null, text: "三" },
				{ padding: 10, backgroundColor: null, color: null, text: "四" },
			],
			centre: [
				{ padding: 10, backgroundColor: null, color: null, text: "Pretend - Longer Repose" },
			],
			right: [
				{ padding: 10, backgroundColor: null, color: null, text: "22/03/2044" },
				{ padding: 10, backgroundColor: null, color: null, text: "23:42" },
			],
		},
		bottom: {
			left: [],
			centre: [],
			right: [],
		},
	},

  reducers: {
    addWidget: (state, action) => {
			const { bar, pos } = action.payload;
			state[bar][pos].push(_widget)
    },
    delWidget: (state, action) => {
			const { bar, pos } = action.payload;
			state[bar][pos].pop()
    },
    setColor: (state, action) => {
			const { bar, pos, id, color } = action.payload;
			state[bar][pos][id].color = color;
    },
    setBackgroundColor: (state, action) => {
			const { bar, pos, id, color } = action.payload;
			state[bar][pos][id].backgroundColor = color;
    },
  },
});

export const {
	addWidget,
	delWidget,
	setColor,
	setBackgroundColor,
} = widgetSlice.actions;

export const selectWidgets = state => state.widgets;

export default widgetSlice.reducer;
