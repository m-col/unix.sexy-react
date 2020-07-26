import { createSlice } from '@reduxjs/toolkit';


const _widget = { padding: 10, backgroundColor: null, color: null, content: "一" };


export const widgetSlice = createSlice({
  name: 'widgets',

	initialState: {
		top: {
			left: [
				{ padding: 10, backgroundColor: "inherit", color: "inherit", content: "一" },
				{ padding: 10, backgroundColor: "inherit", color: "inherit", content: "二" },
				{ padding: 10, backgroundColor: "var(--color6)", color: "inherit", content: "三" },
				{ padding: 10, backgroundColor: "inherit", color: "inherit", content: "四" },
			],
			centre: [
				{ padding: 10, backgroundColor: "inherit", color: "inherit", content: "Pretend - Longer Repose" },
			],
			right: [
				{ padding: 10, backgroundColor: "inherit", color: "inherit", content: "22/03/2044" },
				{ padding: 10, backgroundColor: "inherit", color: "inherit", content: "23:42" },
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
			if (pos === "right") {
				state[bar][pos].unshift(_widget)
			} else {
				state[bar][pos].push(_widget)
			};
    },
    delWidget: (state, action) => {
			const { bar, pos } = action.payload;
			if (pos === "right") {
				state[bar][pos].shift()
			} else {
				state[bar][pos].pop()
			};
    },
    setColor: (state, action) => {
			const { bar, pos, id, color } = action.payload;
			state[bar][pos][id].color = color;
    },
    setBackgroundColor: (state, action) => {
			const { bar, pos, id, color } = action.payload;
			state[bar][pos][id].backgroundColor = color;
    },
    setContent: (state, action) => {
			const { bar, pos, id, value } = action.payload;
			if (value.length === 0) {
				state[bar][pos].splice(id, 1);
			} else {
				state[bar][pos][id].content = value.replace(/[\n\r]/g, "");
			}
    },
    setPadding: (state, action) => {
			const { bar, pos, id, value } = action.payload;
			state[bar][pos][id].padding = value;
    },
  },
});

export const {
	addWidget,
	delWidget,
	setColor,
	setBackgroundColor,
	setContent,
	setPadding,
} = widgetSlice.actions;

export const selectWidgets = state => state.widgets;

export default widgetSlice.reducer;
