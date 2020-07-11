import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { enable } from 'features/context_menus/slice';
import { selectTitleBars } from './slice';
import './index.css';


export default function TitleBar(props) {
  const dispatch = useDispatch();
  const titleBars = useSelector(selectTitleBars);

	if (!titleBars.enabled) {
		return null;
	};

	const style = {
		lineHeight: `${titleBars.width}px`,
		minHeight: `${titleBars.width}px`,
		minWidth: `${titleBars.width}px`,
	};

	if (props.focussed) {
		style.backgroundColor = titleBars.colourFocus;
		style.color = titleBars.textColourFocus;
	} else {
		style.backgroundColor = titleBars.colour;
		style.color = titleBars.textColour;
	};

	if (titleBars.position === "E") {
		style.writingMode = "sideways-rl";
	} else if (titleBars.position === "W") {
		style.writingMode = "sideways-lr";
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
