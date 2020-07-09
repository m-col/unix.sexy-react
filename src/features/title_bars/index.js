import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTitleBars } from './slice';
import { enable } from 'features/context_menus/slice';
import './index.css';


export default function TitleBar(props) {
  const dispatch = useDispatch();
  const titleBars = useSelector(selectTitleBars);

	if (!titleBars.enabled) {
		return null;
	};

	const style = {
		lineHeight: `${titleBars.width}px`
	};

	if (props.focussed) {
		style.backgroundColor = titleBars.colourFocus;
		style.color = titleBars.textColourFocus;
	} else {
		style.backgroundColor = titleBars.colour;
		style.color = titleBars.textColour;
	};

	if (titleBars.position === "N" || titleBars.position === "S") {
		style.height = `${titleBars.width}px`;
		style.width = "100%";
		if (titleBars.position === "S") {
			style.position = "absolute";
			style.bottom = 0;
		};

	} else { /* East and West */
		style.height = "100%";
		style.width = `${titleBars.width}px`;
		if (titleBars.position === "E") {
			style.position = "absolute";
			style.right = 0;
			style.writingMode = "sideways-rl";
		} else {
			style.writingMode = "sideways-lr";
			style.display = "inline-block";
		};
	};

	return (
		<div
			className="title-bar"
			style={style}
			onContextMenu={e => dispatch(enable({id: 'title_bar', e: e}))}
		>
			term
		</div>
	);
};
